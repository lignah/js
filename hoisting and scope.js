// variable scope
function var_scope(){
  var greeting = 'hello'
}
var_scope();
console.log(greeting);
/* ReferenceError: greeting is not defined */




// variable scope 2
var a
if (1) {
  a = 1
  let b = 2
  const c = 3
  if (-1) {
    b= 4
    const c = 5
  }
  console.log(a, b, c);
}
/* 1 4 3 */




// hoisting
beforehoisting();
var beforehoisting = function() {
  console.log(number);
  var number = 1  // 'hoisting' is only declare
}
beforehoisting();
/* TypeError: beforehoisting is not a function so
 * 'function expression' is treated like variables */




// hoisting2
beforehoisting();
function beforehoisting() {
  console.log(number);  // not defined but undefined
  var number= 1
}
beforehoisting();
/**
 * undefined
 * undefined
 */




// 'var' is global scope so already over
for (var i=0; i<5; i++) {
  setTimeout(a=> console.log(i + 1), i * 1000);
  /* after loop is done, 'var' remains as global variable */
}
/**
 * 6
 * 6
 * 6
 * 6
 * 6
 */
for (let i=0; i<5; i++) {
  setTimeout(a=> console.log(i + 1), i * 1000);
}
/**
 * 1
 * 2
 * 3
 * 4
 * 5
 */