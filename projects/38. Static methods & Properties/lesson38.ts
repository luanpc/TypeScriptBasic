class Circle {
    static pi: number = 3.14;
    public test: number = 69;

    static calculateArea(radius: number) {
        return this.pi * radius * radius;
    }
}
//prop with static
console.log(">>> check pi= ", Circle.pi);

//prop with public
let t = new Circle();
console.log(">>> check test= ", t.test);

//static method
console.log(">>> check pi= ", Circle.calculateArea(10));