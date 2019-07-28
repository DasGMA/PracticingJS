class Node {
    constructor(data = null, next = null) {
        this.data = data;
        this.next = next;
    }
}

export default class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    setHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    setTail(value) {
        const newNode = new Node (value);
        let head = this.head;
        
        while (head.next) {
            head = head.next;
        }
        
        head.next = newNode;
        this.length++;
    }

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

    deleteHead() {
        if (!this.head) return null;

        let value = this.head.data;
        this.head = this.head.next;

        this.length--;
        return value;
    }

    search(value) {
        let currentNode = this.head;
        
        while (currentNode) {
            if (currentNode.data === value) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }

        return null;
    }

    // 2.1 Remove Dups! Write code to remove duplicates from an unsorted linked list. 
    removeDups() {
        let currentNode = this.head;
        let nextNode = currentNode.next;
        const node = {};
        node[currentNode.data] = true;

        if (!this.head) return null;

        while (nextNode) {
            const data = nextNode.data;

            if (node[data]) {
                currentNode.next = nextNode.next;
                this.length--;
            } else {
                node[data] = true;
                currentNode = nextNode;
            }

            nextNode = nextNode.next;
        }
    }
        
    // 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list.
    kthToLast(value) {
        let currentNode = this.head;

        if (this.length < value) return null;

        for (let i = 1; i < this.length - value; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    

    // 2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (i.e., any node but
    // the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
    // that node.

    deleteMiddleNode(node) {
        if (!this.head || node === 0) {
            return null;
        }

        const prev = this.findAt(node - 1);
        if (!prev || !prev.next) {
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
        
    }

    // 2.5 Sum Lists: You have two numbers represented by a linked list, where each node contains a single
    // digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
    // function that adds the two numbers and returns the sum as a linked list.
    // EXAMPLE
    // Input: (7-> 1 -> 6) + (5 -> 9 -> 2).That is,617 + 295.
    // Output: 2 -> 1 -> 9. That is, 912.
    // FOLLOW UP
    // Suppose the digits are stored in forward order. Repeat the above problem.
    // EXAMPLE
    // lnput:(6 -> 1 -> 7) + (2 -> 9 -> 5).That is,617 + 295.
    // Output: 9 -> 1 -> 2. That is, 912. 

    // 2.6 Palindrome: Implement a function to check if a linked list is a palindrome.
    isPalindrome() {
        
        let head = this.head;
        const stack = [];
        let str;

        if (!this.head || this.length === 1) return false;

        while (head.next) {
            stack.push(head.data);
            head = head.next;
        }

        str = stack.toString();

        for (let i = 0; i < str.length / 2; i++) {
            if (str.charAt(i) !== str.charAt(str.length - i - 1)) return false;
        }

        return true;
    }
}