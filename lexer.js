'use strict'

class Lexer {
  #tokenRegex= /\s*(=>|{|}|\(|\)|[a-zA-Z_]\w*|\d+|.)\s*/g
  #tokens= []

  set token(parameter) {
    this.#tokens= this.tokenize(parameter);
  }

  get token() {
    return this.#tokens
  }

  tokenize(parameter) {
    let match
    while (match= this.#tokenRegex.exec(parameter)) {
      this.#tokens.push(match[1]);
    }
    return this.#tokens
  }
}
const lexer= new Lexer();

lexer.token= "the teacher asked me, 'what is (3 + 4) * 5 / (2 - 1)?"
console.log(lexer.token)
/* [
 * 'the',  'teacher', 'asked',
 * 'me',   ',',       "'",
 * 'what', 'is',      '(',
 * '3',    '+',       '4',
 * ')',    '*',       '5',
 * '/',    '(',       '2',
 * '-',    '1',       ')',
 * '?'
 * ]
*/