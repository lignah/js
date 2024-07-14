'use strict'

// return in function
function returninfunction() {w
  for (let i = 0; i < 5; i++) {
    if (i == 2) {
      return                // escape function
    }
    console.log(i);
  }
  console.log('exit(1)');   // doesnt execute
}

returninfunction();
/* 0
 * 1
*/