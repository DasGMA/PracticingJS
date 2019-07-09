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
    constructor(head = null) {
        this.head = head;
    }



}

