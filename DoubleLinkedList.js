class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }

    // Returns the data stored at the current node
    getData() {
        return this.data;
    }

    // Returns the next node this node points to
    getNext() {
        return this.next;
    }

    // Sets this node's `next_node` pointer
    setNext(new_next) {
        return this.next = new_next;
    }

}

class LinkedList {
    constructor(head = null, tail = null) {
        this.head = head;
        this.tail = tail;
    }

    setHead(value) {
        const newNode = new Node(value, this.head, null);
        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }

        this.head = newNode;
    }

    setTail(value) {
        const newNode = new Node(value, null, this.tail);
        if (this.tail) {
            this.tail.next = newNode;
        } else {
            this.head = newNode;
        }
        this.tail = newNode;
    }

    deleteHead() {
        if (!this.head) return null;

        let value = this.head.data;
        this.head = this.head.next;

        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }

        return value;
    }

    deleteTail() {
        if (!this.tail) return null;

        let value = this.tail.data;
        this.tail = this.tail.prev;

        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }

        return value;
    }

    search(value) {
        let currentNode = this.head;
        
        while (currentNode) {
            if (currentNode === value) {
                return currentNode;
            } else {
                currentNode = this.head.next;
            }
        }

        return null;
    }

}
