// intersection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Nischay',
  privileges: ['Create-server'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// type guards
function add(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {  // type guard
    return a.toString() + b.toString();
  }
  return a+b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log('Name: ' + emp.name);
  if ('privileges' in emp) { // type guard
    console.log('privileges: ' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('startDate: ' + emp.startDate)
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({name: 'Anuj', startDate: new Date()});

class Car {
  drive() {
    console.log('Driving...');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck...');
  }

  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;
const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// discriminated unions
interface Bird {
  type: 'Bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'Horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'Bird': 
      speed = animal.flyingSpeed;
      break;
    case 'Horse': 
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'Bird', flyingSpeed: 10});

// type casting
// const userInputElement = <HTMLInputElement>document.getElementById('user-input')!;
const userInputElement = document.getElementById('user-input');

if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

// index properties
interface ErrorContainer {  // { email: 'not a valid email', username: 'must start with a character' }
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: 'Not a valid email!',
  username: 'Must start with a capital character'
}

// function overloads
function addition(a: number, b: number): number;
function addition(a: string, b: string): string;
function addition(a: number, b: string): string;
function addition(a: string, b: number): string;
function addition(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {  
    return a.toString() + b.toString();
  }
  return a+b;
}

const result = addition('Nischay', 'Verma');

// optional chaining
const fetchedUserData = {
  id: 'u1',
  name: 'Nischay',
  job: { title: 'developer', description: 'company'}
};

console.log(fetchedUserData?.job?.title);

// nullish coalescing (null or undefined)
const userInput = undefined;
const storedData = userInput ?? 'default';
console.log(storedData);