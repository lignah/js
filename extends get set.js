'use strict'

class Data {
  constructor() {
    this.odd_number=  [],
    this.even_number= [],
    this.prime_number=[]
  }
}

class Operation extends Data {
  constructor() {
    super();    // refers to constructor of Data class
  }
  split_numbers(...rest) {
    for(let i of rest) {
      if (i % 2 == 0) {
        this.even_number.push(i);
      } else {
        this.odd_number.push(i);
      }
    }
    console.log('odd:', this.odd_number, '\neven:', this.even_number);
  }
  sort_numbers() {
    let array= [...this.odd_number, ...this.even_number].sort((a, b)=> a- b);
    console.log('sort:', array);
  }

  set prime_numbers(e) {
    this.prime_number = e.filter(num=> {
      return num <= 1 ? 0 :
             num <= 3 ? 1 :
             num % 2 === 0 || num % 3 === 0 ? 0 :
             (() => {
              let i = 5
              while (i** 2 <= num) {
                if (num % i === 0 || num % (i + 2) === 0)
                  return 0
                i += 6
              }
              return 1
            })();
    });
  }
  get prime_numbers() {
    return this.prime_number
  }
}

let instance= new Operation();
let array

array= [4, 6, 7, 21, 3, 2, 1, 17]

instance.split_numbers(...array);
instance.sort_numbers();
instance.prime_numbers= array
console.log('prime:', instance.prime_numbers);

/* odd: [ 7, 21, 3, 1, 17 ]
 * even: [ 4, 6, 2 ]
 * sort: [
 *   1, 2,  3,  4,
 *   6, 7, 17, 21
 * ]
 * prime: [ 7, 3, 2, 17 ] 
*/