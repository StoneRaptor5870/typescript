// const person : {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuples - fixed length array
// } = {
//   name: 'nischay',
//   age: 23,
//   hobbies: ['sprots', 'cooking'],
//   role: [1, 'developer']
// };

enum Role {ADMIN=4, READ_ONLY, AUTHOR};

const person = {
  name: 'nischay',
  age: 23,
  hobbies: ['sprots', 'cooking'],
  role: Role.ADMIN
};

// person.role.push('admin'); // pushing is allowed in tuples but you cant increase the length
// person.role[1] = 10; not allowed error

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

if (person.role === Role.ADMIN) {
  console.log('is admin');
}

// const product = {
//   id: 'abc1',
//   price: 12.99,
//   tags: ['great-offer', 'hot-and-new'],
//   details: {
//     title: 'Red Carpet',
//     description: 'A great carpet - almost brand-new!'
//   }
// }

// {
//   id: string;
//   price: number;
//   tags: string[];
//   details: {
//     title: string;
//     description: string;
//   }
// }