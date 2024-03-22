// built-in generics
const names: Array<string> = [];       // string[]

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('this is completed');
  }, 2000);
});

// creating a generic function and constraints  (extending the generic type is constraining)
function merge<T extends {}, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: 'Nischay', hobbies: ['Music']}, {age: 23});
console.log(mergedObj.name);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] { // tuples
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element.';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe('Hi there'));

// keyof constraint
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return 'Value: ' + obj[key];
}

extractAndConvert({name: 'Nischay'}, 'name');

// generic classes
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Nischay');
textStorage.addItem('Verma');
textStorage.removeItem('Verma');
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// const maxObj = {name: 'Nischay'};
// objStorage.addItem(maxObj);
// objStorage.addItem({name: 'Verma'});
// objStorage.removeItem(maxObj);
// console.log(objStorage.getItems());

// generic utility types
// partial
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

// readonly
const stuff: Readonly<string[]> = ['Nischay', 'Verma'];
// stuff.push('Anuj'); not allowed in readonly
// stuff.pop();
