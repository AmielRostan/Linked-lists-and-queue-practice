// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1)

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const node = new DoublyLinkedNode(val);

        if(this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;

        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1)
    }

    removeFromHead() {
        // Remove node at head
        if(this.length === 0) {
            return undefined;
        }

        let removed;

        removed = this.head.value;
        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;

        return removed;

        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if(this.length === 0) {
            return undefined;
        }

        let removed;

        removed = this.tail.value;
        if(this.length === 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;

        return removed;

        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1)
    }

    peekAtHead() {
        // Return value of head node
        if(this.length === 0) {
            return undefined;
        }

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if(this.length === 0) {
            return undefined;
        }

        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
