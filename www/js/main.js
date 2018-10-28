// 12

let lettersInAlphabet = 'abcdefghijklmnopqrstuvwxyzåäöABCDEFGHOJKLMNOPQRSTUVWXYZÅÄÖ';

function isInAlphabet(aLetter) {
  return lettersInAlphabet.includes(aLetter);
}

console.log(isInAlphabet('a'));