// union types, literal types & type aliases

type combinable = number | string; // type aliases
type conversionDescriptor = 'as-number' | 'as-text'

function combine(input1: combinable, input2: combinable, resultConversion: conversionDescriptor) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
//   if (resultConversion === 'as-number') {
//     return +result;
//   } else {
//     return result.toString();
//   }
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringsAges = combine('30', '26', 'as-number');
console.log(combinedStringsAges);

const combinedNames = combine('nischay', 'verma', 'as-text');
console.log(combinedNames);

type User = { name: string; age: number };
const u1: User = { name: 'nischay', age: 23 }; 

function greet(u1: User) {
  console.log('Hi, I am ' + u1.name);
}

greet(u1);
 
function isOlder(u1: User, checkAge: number) {
  return checkAge > u1.age;
}

const truth = isOlder(u1, 25);
console.log(truth);