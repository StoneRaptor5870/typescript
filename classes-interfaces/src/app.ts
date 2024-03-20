class Department {
  // private readonly id: number;
  // private name: string;
  protected employees: string[] = [];

  constructor(private readonly id: number, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  constructor(id: number, private reports: string[]) {
    super(id, 'Accounting');
  }

  addEmployee(name: string) {
    if (name === 'Nischay') {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment(1,['Nischay']);

it.addEmployee('Nischay');
it.addEmployee('Anuj');

console.log(it);
it.describe();
it.printEmployeeInformation();

const accounting = new AccountingDepartment(2, []);
accounting.addReport('something went wrong');
accounting.printReports();
console.log(accounting);
accounting.addEmployee('Nischay');
accounting.addEmployee('Anuj');
accounting.printEmployeeInformation();

// const accountingCopy = {name: 'SKSKSK', describe: accounting.describe};
// accountingCopy.describe();