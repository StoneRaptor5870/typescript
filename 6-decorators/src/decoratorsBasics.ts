// class decorator
function Logger(constructor: Function) {
  console.log('Logging...');
  console.log(constructor);
}

@Logger
class Person {
  name = 'Nischay';

  constructor() {
    console.log('Creating person object...');
  }
}

const p = new Person();
console.log(p);

// decorator factories
function Log(logString: string) {
  return function(constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Log('LOGGING - PERSON')
class Person2 {
  name = 'Nischay';

  constructor() {
    console.log('Creating person object...');
  }
}

const s = new Person2();
console.log(s);

// decorator meta programming & multiple decorator
function WithTemplate(template: string, hookId: string) {
  return function(constructor: any) {
    console.log('Rendering template');
    const hookEl = document.getElementById(hookId);
    const t = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = t.name;
    }
  }
}

@Log('Logging')
@Logger
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person3 {
  name = 'Nischay';

  constructor() {
    console.log('Creating person object...');
  }
}

const q = new Person3();
console.log(q);

// property, accessor & parameter decorator
function Logs(target: any, propertyName: string | Symbol) {
  console.log('Property decorator');
  console.log(target, propertyName);
}

function Logs2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Logs3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
  console.log('Method decorator');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Parameter decorator');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Logs
  title: string;
  private _price: number;

  @Logs2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid price - should be positive!');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Logs3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1+tax);
  }
}


