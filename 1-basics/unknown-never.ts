// unknown and never type

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'nischay';
if (typeof userInput === 'string') {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code};
  // while (true) {}
}

generateError('An error occured!', 500); // it never returns anything because it ends the script