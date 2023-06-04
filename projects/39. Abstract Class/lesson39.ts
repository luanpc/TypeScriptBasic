/*
Abstract class
- Abstract method in class hasn't body
- Can't initialization
- Must be extended & 'override' all abstract method
*/
abstract class Employee {
    constructor(private firstName: string, private lastName: string) {

    }

    abstract getSalary(): number;

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`
    }

    conpensationStatement(): string {
        return `${this.fullName} make ${this.getSalary} a month.`
    }
}

//const test = new Employee("Dev", "L") // Error

class Accountance extends Employee {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName);
    }

    getSalary(): number {
        return this.salary
    }
}

const test = new Accountance("Dev", "L", 2000)

console.log(test.getSalary());