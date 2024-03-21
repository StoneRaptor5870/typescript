abstract class Department {
  static fiscalYear = 2024;
  // private readonly id: number;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: number, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return {name: name};
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: number, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  describe() {
    console.log('IT Department - ID: ' + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  private constructor(id: number, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment(2, []);
    return this.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id);
  }

  addEmployee(name: string) {
    if (name === 'Nischay') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Nischay'); // static method
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment(1,['Nischay']);

it.addEmployee('Nischay');
it.addEmployee('Anuj');

console.log(it);
it.describe();
it.printEmployeeInformation();

// const accounting = new AccountingDepartment(2, []);
const accounting = AccountingDepartment.getInstance(); // singletons & private constructor
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);

accounting.addReport('something went wrong');
accounting.mostRecentReport = 'Year end report'; //setter
console.log(accounting.mostRecentReport); // getter
//accounting.printReports();
console.log(accounting);
accounting.addEmployee('Nischay');
accounting.addEmployee('Anuj');
//accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = {name: 'SKSKSK', describe: accounting.describe};
// accountingCopy.describe();