
class Stack {
    constructor() {
        this.arr = [];
        this.count = 0;
    };

    push(item){
        this.arr.push(item);
        this.count = this.count + 1;
    };

    pop(){
        if (this.count > 0){
            this.count = this.count - 1;
        };
        return this.arr.pop();
    };

    getLength(){
        return this.count;
    }

    peek() {
        return this.arr.slice(-1)[0];
    }
}

let stack = new Stack();

stack.push(10);
stack.push(10);
stack.push(10);
stack.push(10);
stack.push(10);
console.log(stack.peek());
console.log(stack.getLength())
stack.pop();
console.log(stack.getLength())