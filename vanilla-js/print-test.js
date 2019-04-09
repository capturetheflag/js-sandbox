// ----------------------------------------------------------------------------------------------------------
// 1. Написать реализацию функции yeMath, чтобы она работала следующим образом
var y = yeMath();
y.sum(7)
y.sum(10)
y.show()
// 17
// команда y.show() должна вывести 17 в консоль

function yeMath() {
    let n = 0;
    return {
        sum: function(a){n += a;},
        show: function(){console.log(n);}
    };
}

// ----------------------------------------------------------------------------------------------------------
// 2. Реализовать функцию countdown, которая будет с интервалом в 1 секунду выводить обратный отчет в консоль
countdown(10);
// 10
// 9
// 8
// ...
// 3
// 2
// 1
function countdown(startNumber) {
	let n = startNumber;
    return (function start() {
        if(n) {
			console.log(n--);
			setTimeout(start,1000);
		};
    }());
}

// ----------------------------------------------------------------------------------------------------------
// 3. Реализовать функцию createNumberObj, которая будет работать следующим образом
var add = createNumberObj(19);
add(10);
// 29     - в консоль после вызова add() выведется 29 в смысле
add(100);
// 129    - в консоль после второго вызова выведется 129 и так дальше

function createNumberObj(base) {
	let n = base;
    return function(a){console.log(n += a);}
}

// 4. Function that collects all parents of the child until the assigned level in one Array
function getParents( obj, level ) { // <- level = 0 => take no parents
   let all = [];
   all.push(obj); // <- first element is the child object itself
   let proto = obj.constructor.getPrototypeOf( obj );
   while ( level-- != 0 && proto != Object.prototype ) {
      all.push(proto);
      proto = proto.constructor.getPrototypeOf( proto );
   }
   return all;
}

// 5. Function that performs deep clone of the Object. Reference types are cloned in the way where there are no longer any links from the original.
function deepClone( value, level, useNewValues ) {
   // useNewVariable - 1 => use child params, - 0 => use parent params
   let output;
   let parents = level >= 1 ? getParents( value, level ) : value;

   if ( value && typeof( value ) == "object" ) {

      output = Array.isArray( value ) ? [] : {};

      for ( let i in value ) {
         if ( level >= 1 ) {
            for (let o1 = 0, o2 = parents.length; o1 < o2; o1++) {
               let child = useNewValues > 0 ? (parents.length-o1-1) : o1;
               if ( parents[child].hasOwnProperty(i) ) {
                  output[i] = deepClone( parents[child][i], 0 );
               }
            }
         }
         else if( value.hasOwnProperty(i) ) {
            output[i] = deepClone( value[i], 0 );
         }
      }

      return output;
   }
   else {
      return value;
   }
}

// 6. Function that extends an Object "a" with parameters of the Object(s) "b"
function extend(a, b, level, useNewValues) {
   if (Array.isArray(b)) {
      for (let j in b) {
         let temp = deepClone(b[j], level, useNewValues);
         for (let i in temp) {
            a[i] = temp[i];
         }
      }
   }
   else {
      let temp = deepClone(b, level, useNewValues);
      for (let i in temp) {
         a[i] = temp[i];
      }
   }

   return a;
}


// print
function print() {
  const elementId = 'output-section';
  document.getElementById(elementId).innerHTML = combine(createNumberObj, countdown, yeMath);
}

function combine() {
  let str = '';
  for (let i = 0; i < arguments.length; i++) {
    str += `<p>${arguments[i].toString().replace(/[\r\n]/gm, '<br>')}</p>`
  }

  return str;
}
