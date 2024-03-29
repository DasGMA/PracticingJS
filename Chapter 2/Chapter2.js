import SLL from "./sll";


// 2.7 Intersection: Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth
    // node of the first linked list is the exact same node (by reference) as the jth node of the second
    // linked list, then they are intersecting. 

// 2.8 Loop Detection: Given a circular linked list, implement an algorithm that returns the node at the
// beginning of the loop.
// DEFINITION
// Circular linked list: A (corrupt) linked list in which a node's next pointer points to an earlier node, so
// as to make a loop in the linked list.
// EXAMPLE
// Input: A -> B -> C -> D -> E -> C [the same C as earlier]
// Output: C



const arr = [1,2,3,4,5,6,7];

const list = new SLL();

for (const value of arr) {
    list.addToHead(value);
}

console.log(list.head)








