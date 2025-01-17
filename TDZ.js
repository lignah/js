/** TDZ, temporal dead zone, let & const
 * variables declared with let and const enter the "Temporal Dead Zone" (TDZ)
 * their declarations are hoisted, but initialization occurs at original code location
 * therefore, accessing these variables before initialization results in referenceError
 */
let tdz;           // declaration is hoisted but now its in TDZ
console.log(tdz);  // referenceError
tdz = 3;           // exit from TDZ