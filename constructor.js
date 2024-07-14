"use strict"




// when wanting to create multiple similar objects
// use constructor(= object creation machine) 


// attendance sheet
function Student(name, grade, classs) {
  this.name = name  // THIS: INSTANCE (= new OBJECT)
  this.grade= grade
  this.classs = classs
  this.self_introduction = function() {
    console.log(`hello. im ${this.name} from grade ${this.grade}, class ${this.classs}.`);
  }
}

// inheritance to kid_2
let kid_1 =  new Student('Emily', 2, 3);  // new -> return 
/* return:
 * 
 * Student {
 *   name: 'Emily',
 *   grade: 2,
 *   classs: 3,
 *   self_introduction: [Function ()]
 * } 
*/
kid_1.self_introduction()
/* hello. im Emily from grade 2, class 3.
*/





/* prototype = genes */
// when constructor is created, space called prototype(key) is automatically generated


// only [constructor | constructor function] have prototype, objects cannot have one
Student.prototype.gender = 'girl'  // not added to the Student instance, but can be used
console.log(kid_1);
/* 
 * Student {
 *   name: 'Emily',
 *   grade: 2,
 *   classs: 3,
 *   self_introduction: [Function ()]
 * } 
*/
console.log(kid_1.gender);
/* girl */




// 1. prototype is secretly created only for functions
// 2. if wanna to check parent genes(=prototype), use child.__proto__
let parent = { name: 'parent' }
let child = { }

child.__proto__ = parent
console.log('child.name =', child.name);
/* child.name = parent
*/




// so why is kid_1 able to use toString() even though it doesnt have it?
console.log('kid_1.toString(): ', kid_1.toString());
/* kid_1.toString():  [object Object]
*/




// .sort() === Array.prototype.sort()

/* = let array = [1, 2, 3] */
let array = new Array(1, 2, 3); // actual way to create an array
/* without using 'new', it just function */

// its an object created from [Array constructor]
// inherited methods like .sort(), .map(), .push(), ... from [ancestor(=Array)]
console.log(array);
/* [ 1, 2, 3 ]
*/














// this in arrow function
function This(parameter) {
  this.name= parameter
}
This.prototype.meth0d= function() {
  console.log(this.name);
}
This.prototype.meth1d= e=> {
  console.log(this.name);
}
var thisis= new This('whatisthis');

thisis.meth0d()
thisis.meth1d()
/* whatisthis
 * undefined (_or Window)
*/




// creating a method available for all arrays
let arrays= [1, 3, 2, 3, 4, 5]

Array.prototype.remove3= function() {
  let temp= []
  for(let a of this) {  // let: block scope, var: function scope
    if (a != 3)
      temp.push(a)
  }
  this.length= 0
  for(let a of temp) {
    this.push(a)    // assigning value to this is impossible, but modifying its possible
  }
}

arrays.remove3();
console.log(arrays);

let arraytest= [3, 3, 3, 2, 1, 3, 5]
arraytest.remove3();
console.log(arraytest);
/* [ 1, 2, 4, 5 ]
 * [ 2, 1, 5 ]
*/