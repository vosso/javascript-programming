// 4

let name;

function askForName() {
  name = prompt('What is your name?');
  if (name) {
    console.log('Hello ' + name);
  } else {
    console.log('Goodbye!');
  }
}

askForName();