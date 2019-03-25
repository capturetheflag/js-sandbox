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
  // .. put your implementation here
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