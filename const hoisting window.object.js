// const object
const construct_object= { key: 'balue' }
construct_object.key= 'value'
console.log(construct_object.key);
/* value
*/




// variable scope
function var_scope(){
  var hi= 'hello'
}
var_scope();
console.log(hi);
/* ReferenceError: hi is not defined
*/




// variable scope 2
var let
if (1) {
  var a= 1
  let b= 2
  const c= 3
  if (true) {
    let b= 4
    const c= 5
  }
  console.log(a, b, c);
}
/* 1 2 3
*/




// 'hoisting' is only declare
beforehoisting();
var beforehoisting= function() {
  console.log(number);  // undefined
  var number= 1
}
/* Explanation: [function expression] is treated like variables, 
 * so "beforehoisting" is not a function, resulting in an error.
*/




// TDZ, temporal dead zone, let & const
/* variables declared with let and const enter the "Temporal Dead Zone" (TDZ)
 * their declarations are hoisted, but initialization occurs at original code location
 * therefore, accessing these variables before initialization results in referenceError
*/
let tdz;           // declaration is hoisted but now its in TDZ
console.log(tdz);  // referenceError
tdz = 3;           // exit from TDZ




// in browser(v8), not nodejs
let x= 1  // not eq window.x
var y= 2
window.x= 3
window.y= 4
console.log(x + y);
/* 5
*/




// 'var' is already over
for (var i=0; i<5; i++) {
  setTimeout(a=> console.log(i + 1), i * 1000);
  /* After loop is done, 'var' remains as global variable */
}
/* 6
 * 6
 * 6
 * 6
 * 6
*/
for (let i=0; i<5; i++) {
  setTimeout(a=> console.log(i + 1), i * 1000);
}
/* 1
 * 2
 * 3
 * 4
 * 5
*/




// tagged literal
function tagged_literal() {
  console.log('success');
}
tagged_literal``
/* success
*/
