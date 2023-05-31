function addNumbers(a: number, b: number): number {
    return a + b;
}

function addStrings(a: string, b: string): string {
    return a + b;
}

// 2 functions làm nhiệm vụ tương tự nhau => có thể gồm thành 1 với union type
function add111(a: number | string, b: number | string) {
    if (typeof a === 'number' && typeof b === 'number')
        return a + b;

    if (typeof a === 'string' && typeof b === 'string')
        return a + b;
}

//overloading
function addNew(a: number, b: number): number;

function addNew(a: string, b: string): string;

function addNew(a: any, b: any) {
    return a + b;
}

// console.log(">>> check add new: ", addNew(6, 9), addNew(" Hello", " & World"))


class Counter {
    private current: number = 0;
    count(): number;
    count(target: number): number[];
    count(target?: number): number | number[] {
        if (target) {
            let values: number[] = [];
            for (let start = this.current; start <= target; start++) {
                values.push(start);
            }
            return values;
        }
        return ++this.current;
    }
}

let counter111 = new Counter();

console.log(counter111.count()); // return a number
console.log(counter111.count(20)); // return an array