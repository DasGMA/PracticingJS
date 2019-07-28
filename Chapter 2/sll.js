class Node {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class SLL {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
        this.length = 0;
    }

    addToList(...data) {
        this.addToHead(data[0]);
        for (let i = 1; i < data.length; i++) {
            this.addToTail(data[i]);
        }
    }

    addToHead(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
        this.tail = this.head;
        this.length++;
    }

    addToTail(value) {
        const node = new Node(value);
        let head = this.head;

        while (head.next) {
            head = head.next;
        }

        head.next = node;
        this.tail = head.next;
        this.length++;
    }

    // 2.1 Remove Dups! Write code to remove duplicates from an unsorted linked list. 
    removeDups() {
        let node = this.head;
        let nextNode = node.next;
        const nodes = {};
        nodes[node.value] = true;
        

        if (!this.head) return null;

        while (nextNode) {
            const data = nextNode.value;

            if (nodes[data]) {
                node.next = nextNode.next;
                this.length--;
            } else {
                node = nextNode;
            }

            nextNode = nextNode.next;
        }
    }

    // 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
    kthToLast(value) {
        let node = this.head;

        if (this.length < value) return null;

        for (let i = 1; i < this.length - value; i++) {
            node = node.next;
        }

        return node;
    }

    // 2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
    // the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
    // that node.
    findAt(index) {
        let length = 0;
        let head = this.head;

        while (head) {
            if (length === index) {
                return head;
            }

            length++;
            head = head.next;
        }

        return null;
    }

    deleteMiddleNode(node) {
        if (!this.head || node === 0) {
            return null;
        }

        const prev = this.findAt(node - 1);
        if (!prev || !prev.next || prev.next === this.tail) {
            return null;
        }

        prev.next = prev.next.next;
        this.length--;
    }

    // 2.4 Partition: Write code to partition a linked list around a value x, such that all nodes less than x come
    // before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
    // to be after the elements less than x (see below). The partition element x can appear anywhere in the
    // "right partition"; it does not need to appear between the left and right partitions.
    // EXAMPLE
    // Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
    // Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

    partition(partition) {
        const leftHead = new SLL();
        const rightHead = new SLL();
        let head = this.head;
        let left = leftHead;
        let right = rightHead;

        while (head) {
            
            if (head.value < partition) {
                left.next = head;
                left = head;
            } else {
                right.next = head;
                right = head;
            }

            head = head.next;
        }
        left.next = rightHead.next;
        right.next = null;
        return leftHead.next;
    }
}

const data = [3, 5, 8, 5, 10, 2, 1];
const list = new SLL();

list.addToList(...data);

console.log('HEAD', list.head)
console.log(list.length);
console.log('TAIL', list.tail);
console.log(list.partition(5));
console.log(list.head.value);
console.log(list.head.next.value);
console.log(list.head.next.next.value);
console.log(list.head.next.next.next.value);
console.log(list.head.next.next.next.next.value);
console.log(list.head.next.next.next.next.next.value);
console.log(list.head.next.next.next.next.next.next.value);