// 10

function isEvenNumber(aNumber) {
  return Number.isInteger(aNumber / 2);
}

let numbers = '';

for(i = 1; i <= 10; i++) {
  if(isEvenNumber(i)) {
    numbers += i + '...';
  } else {
    numbers += i + '.';
  }
}

console.log(numbers);