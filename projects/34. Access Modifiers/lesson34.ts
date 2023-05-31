class Employee {
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number) {
        this.empName = name;
        this.empCode = code;
    }
}


class SalesEmployee extends Employee {
    private department: string;

    constructor(name: string, code: number, department: string) {
        super(name, code);
        this.department = department;
    }
}

let emp = new SalesEmployee("Dev L", 123, "Sales");
// emp.empCode; //Compiler Error