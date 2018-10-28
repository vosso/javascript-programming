// 13

let lettersInAlphabet = 'abcdefghijklmnopqrstuvwxyzåäöABCDEFGHOJKLMNOPQRSTUVWXYZÅÄÖ';

function isInAlphabet(aString) {
  for(letter of aString) {
    if(!lettersInAlphabet.includes(letter)) {
      return false;
    }
  }
  return true;
}

console.log(isInAlphabet('mySecretPassword'));