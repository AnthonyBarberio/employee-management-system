// Step 2: Employee class
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} works in the ${this.department} department.`;
  }
}

// Step 3: Manager subclass
class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department); // Inherit from Employee
    this.teamSize = teamSize;
  }

  describe() {
    return `${super.describe()} They manage a team of ${this.teamSize}.`;
  }
}

// Step 4: Create some employees and managers
const emp1 = new Employee("Alice", "Marketing");
const emp2 = new Employee("Bob", "Sales");
const mgr1 = new Manager("Carol", "Engineering", 5);

// Step 5: Company class
class Company {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  listEmployees() {
    this.employees.forEach(emp => {
      console.log(emp.describe());
    });
  }
}

// Step 6: Instantiate and use the company
const myCompany = new Company();
myCompany.addEmployee(emp1);
myCompany.addEmployee(emp2);
myCompany.addEmployee(mgr1);
myCompany.listEmployees();
