interface IEmployee {
    empCode: number;
    name: string;
    getSalary: (empCode1: number) => number;
}

class Accountance implements IEmployee {
    constructor(public empCode: number, public name: string) {
        this.empCode = empCode;
        this.name = name;
    }


    getSalary = (code: number): number => {
        return 100 * code;
    }

    getName = () => {
        return 'Dev L'
    }
}

const test = new Accountance(1, "DevL")
console.log(test.getSalary(100));