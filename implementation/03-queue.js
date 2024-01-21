const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const node = new SinglyLinkedNode(val);

        if(this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this.length;

        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1)
    }

    dequeue() {
        // Remove node from front of queue (linked list)
        const removed = this.head;
        if(this.length === 0) {
            return null;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;

        return removed.value;

        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1)
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
