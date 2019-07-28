
class SetOfStacks {
    constructor(maxSize) {
        if (maxSize === undefined) console.error('Initial MaxSize required.');
        this.maxSize = maxSize;
        this.stack = [[]];
    }

    push(value) {
        if (this.stack[this.stack.length - 1].length === this.maxSize) {
            this.stack.push([]);
        }
        this.stack[this.stack.length - 1].push(value);
    }

    pop() {
        const value = this.stack[this.stack.length - 1].pop();
         
        if (this.stack.length > 1 && this.stack[this.stack.length - 1].length === 0) {
            this.stack.pop()
        }
          
        return value
      }

    popAt(stackIndex) {
        if (stackIndex < 1 || stackIndex > this.stack.length) console.error('StackIndex is too small or too big.');
            
        if (stackIndex === this.stack.length) {
            return this.pop();
        }
            
        let stack = this.stack[stackIndex - 1];
        const value = stack.pop();
        let nextStack = [];
            
        for (let i = stackIndex; i < this.stack.length; i++) {
            nextStack = this.stack[i];
            nextStack.reverse();
            stack.push(nextStack.pop());
            nextStack.reverse();
            stack = nextStack;
        }
            
        if (this.stack.length > 1 && this.stack[this.stack.length - 1].length === 0) {
            this.stack.pop()
        }
            
            return value;
    }
}

const sos = new SetOfStacks(3);
sos.push(1);
sos.push(2);
sos.push(3);
sos.push(4);
console.log(sos);
console.log(sos.popAt(2));
console.log(sos);