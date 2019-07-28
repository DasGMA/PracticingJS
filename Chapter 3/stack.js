
class Stack {
    constructor() {
        this.arr = [];
        this.length = 0;
        this.min = null;
    };

    push(item) {
        this.arr.push(item);
        this.length = this.length + 1;

        if (this.min === null) {
            this.min = item;
        } else if (this.min > item) {
            this.min = item;
        }
    };

    pop() {
        if (this.length > 0) {
            this.length = this.length - 1;
        };
        
        return this.arr.pop();
    };

    peek() {
        return this.arr.slice(-1)[0];
    }
}

let stack = new Stack();

stack.push(10);
stack.push(10);
stack.push(5);
stack.push(10);
stack.push(10);
console.log(stack.peek());
console.log(stack.length);
stack.pop();
console.log(stack.length);
console.log(stack.min, 'MIN');

