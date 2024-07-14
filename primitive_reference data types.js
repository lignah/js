'use strict'
// primitive_reference data types




// primitive data type
let primitive = 'A'
let primitive2 = primitive

primitive = 'B'
console.log(primitive2);
/* A
*/




// reference(array & object) is pointer
let object= { pointer: 'A' }
let ref_object= object

object.pointer = 'B'
console.log(ref_object);
/* { pointer: 'B' }
*/


/* reference data type
+---------------------------+
|                           |
|    memory (heap)          |  heap, managed by garbage collector
|   +-------------------+   |
|   | {object}, [array] |   |
|   +-------------------+   |
|                           |
+---------------------------+
          ^        ^
          |        |
          |        +-------------+
          |                      |
+---------|----------------------|------------+
|         |   memory (stack)     |            |
| +------------------+ | +------------------+ |
| | object           | | | ref_object       | |
| | (reference type) | | | (reference type) | |
| +------------------+ | +------------------+ |
|                                             |
+---------------------------------------------+
*/




// object3.pointer == object4.pointer
let object3= { pointer: '3' }
let object4= { pointer: '3' }

console.log(object3 == object4);
/* false
*/
