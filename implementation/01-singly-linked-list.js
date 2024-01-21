// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        const node = new SinglyLinkedNode(val);

        node.next = this.head;
        this.head = node;
        this.length++;

        // return { head: this.print(this.head), length: this.length };
        return this;
        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1).
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        // time O(n) and space O(1)

        // Add node of val to tail of linked list
        let newNode = new SinglyLinkedNode(val);

        if (this.head === null) {
            this.head = newNode;
            this.length++;
            return this;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        this.length++;

        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(this.head === null) {
            return undefined;
        }

        const removed = this.head;
        this.head = this.head.next;
        this.length--;

        return removed;

        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1)
    }

    removeFromTail() {
        // Remove node at tail
        let removed;
        let current = this.head;

        if(this.length === 0) {
            return undefined;
        } else if (this.length === 1) {
            removed = this.head;

            this.head = null;
            this.length--;
            return removed;
        }

        while(current) {
            if(current.next.next === null) {
                removed = current.next;
                current.next = null;
            }
            current = current.next;
        }

        this.length--;
        return removed;


        // Write your hypothesis on the time complexity of this method here
        // time O(n) and space O(1)
    }

    peekAtHead() {
        // Return value of head node
        if(this.head === null) {
            return undefined;
        }

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
        // time O(1) and space O(1)
    }

    print() {
        // Print out the linked list
        let node = this.head;

        while(node){
            console.log(node.value);
            node = node.next;
        }

        // Write your hypothesis on the time complexity of this method here
        // time O(n) and space O(1)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
