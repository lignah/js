/* ...spread operator, */

// 1. wanna spread array elements
const array1= ['hello', 'world']
console.log(...array1);
console.log(...array1[0]); // == console.log('h','e','l','l','o');
/* hello world
 * h e l l o
*/




// 2. array, deep copy
const x= [1, 2, 3]
const y= [4, 5]
const z= [...x,  4, 5]
console.log(z);
/* [ 1, 2, 3, 4, 5 ]
*/




// 2.5 pointer, not copy
const some_array= [1, 2, 3]
let p;

p= some_array
some_array[3]= 4
console.log(some_array);
console.log(p);
/* [ 1, 2, 3, 4 ]
 * [ 1, 2, 3, 4 ]
*/


// 3. object, deep copy
const objec1= {a: 1, b: 2}
const objec2= {...objec1, c: 3}
console.log(objec2);
/* { a: 1, b: 2, c: 3 }
*/




// 4. object overwrite
const objec_1= {a: 1, b: 2}
const objec_2= {a: 3, ...objec_1}
const objec_3= {...objec_1, a: 3}
console.log(objec_2);
console.log(objec_3);
/* { a: 1, b: 2 }
 * { a: 3, b: 2 }
*/




// 5. function parameter
let array= [1, 2, 3]

ADD(array[0], array[1], array[2]);
ADD.apply(undefined, array);
ADD(...array);

function ADD(a, b, c) {
  console.log(a + b + c);
}
/* 6
 * 6
 * 6
*/