class Person {
    public ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `calling method: ${this.firstName} ${this.lastName}`;
    }
}

let devl = new Person("123", "Hello", " World");
console.log(">> check class: ", devl.getFullName())