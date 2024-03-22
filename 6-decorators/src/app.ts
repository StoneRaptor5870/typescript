// returning ( and changing ) a class in a class decorator
function WTemplate(template: string, hookId: string) {
  console.log('TEMPLATE FACTORY');
  return function<T extends {new(...args: any[]): {name: string}}>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(...args: any[]) {
        super();
        console.log('Rendering template');
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name;
        }
      }
    }
  }
}

@WTemplate('<h1>My Person Object</h1>', 'app')
class Stuff {
  name = 'Nischay';

  constructor() {
    console.log('Creating person object...');
  }
}

const x = new Stuff();
console.log(x);

function Autobind(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  };
  return adjDescriptor;
}

// creating an autobind decorator
class Printer {
  message: string;

  constructor() {
    this.message = 'This works!';
  }

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const r = new Printer();
r.showMessage();
const button = document.querySelector('button')!;
button.addEventListener('click', r.showMessage);