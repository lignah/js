'use strict'

// function with a 70percent success rate
const promise_random = $=> {
  return new Promise((resolve, reject)=> {
    Math.floor(Math.random() * 10) + 1 <= 7 ? resolve() : reject()
  })
}

promise_random()
  .then($=> console.log('resolve'))
  .catch($=> console.log('reject'))

/* Promise can be used instead of callbacks for sequential execution */