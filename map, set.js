'use strict'

/* Map(): data(key: value) relationship */
let flower= new Map();

flower.set('rose', 'red');
console.log(flower);    // Map(1) { 'rose' => 'red' }

// flower.get('')
// flower.delete('')
// flower.size
// for(let key of flower.keys()){}




/* Set(): doesnt allow duplicates */
let array= [1, 2, 3, 4, 3, 2, 3, 5, 7, 1, 2]
let array2= new Set(array);
console.log(array2);   // Set(6) { 1, 2, 3, 4, 5, 7 }

array= [...array2]
console.log(array);    // [ 1, 2, 3, 4, 5, 7 ]

