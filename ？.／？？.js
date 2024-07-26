'use strict'

// optional chaining
const user = {
  name: "Alice",
  address: {
    street: "123 Maple St",
    city: "Wonderland",
    zip: "1234"
  },
  age: 7
}
/* in nested objects, data can be safely accessed without encountering reference errors
 * if left side is [null or undefined], it returns undefined
 * if an error occurs, code below point where problem happened will not be executed
 * 
 * when there is a single dot, it returns 'undefined', and errors only occur with two or more dots
 * whether you use if statement to prevent errors or use optional chaining */

console.log(user.address.state);    // undefined




// nullish coalescing
const country = user.address?.country ?? "unknown"
console.log(country);   // unknown
/* if left operand is null or undefined, it returns value of the right operand */