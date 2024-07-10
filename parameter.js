// default parameter
function DEFAULT(a, b= 10* a) {
  console.log(a + b);
}
DEFAULT(2);
DEFAULT(2, 3);
/* 22
 * 5
*/




// rest parameter
function REST(...rest) {   // (...rest) => [rest]
  console.log(rest);
}
REST(1, 2);
/* [ 1, 2 ]
*/