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
