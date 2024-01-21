// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        if(this.head === null) {
            this.length = 0;
        } else {
            this.lenght = 1;
        }
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        // Returns the length of the list
        let current = this.head;
        let count = 0;

        while(current) {
            current = current.next;
            count++;
        }

        return count;
        // Implement in O(n) and in O(1) time complexity

        // for a time complexity of O(1) I have to use another variable
        // for saving the length.
        // return this.length;
    }

    sumOfNodes() {
        // Returns the sum of the values of all the nodes
        let total = 0;
        let current = this.head;

        while(current) {
            total += current.value;
            current = current.next;
        }

        return total;

        // Write your hypothesis on the time complexity of this method here
        // time O(n) and space O(1)
    }

    averageValue() {
        // Returns the average value of all the nodes
        let total = this.sumOfNodes();
        let quantity = this.listLength();

        return total / quantity;

        // Write your hypothesis on the time complexity of this method here
        // time O(n) and space O(1)
    }

    findNthNode(n) {
        // Returns the node at the nth index from the head
        let curr = this.head;

        while(n > 0) {
            curr = curr.next;
            n--;
        }

        if(curr === null) {
            return null;
        }

        return curr;

        // Write your hypothesis on the time complexity of this method here
        // time O(n) and space O(1)
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
        let length = this.listLength();

        let middle = Math.ceil(length / 2) - 1;

        let current = this.head;

        while(middle > 0) {
            middle--;
            current = current.next;
        }

        return current;

        // Write your hypothesis on the time complexity of this method here
        // time O(n) and space O(1)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const reversed = new SinglyLinkedList();
        let current = this.head;
        // reversed.head = current;

        while(current) {
            let node = new SinglyLinkedNode(current.value);
            node.next = reversed.head;
            reversed.head = node;
            current = current.next;
        }

        return reversed;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.head;
        let prev = null;
        let next = null;

        while (current) {
            next = current.next;

            current.next = prev;

            prev = current;
            current = next;
        }

        this.head = prev;

        return this;
        // Write your hypothesis on the time complexity of this method here
        // time O(n) and space O(n)
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?
            let slow = this.head;
            let fast = this.head;

            while (fast && fast.next) {
                fast = fast.next.next;
                if (fast) {
                    slow = slow.next;
                }
            }

            return slow;
        // Write your hypothesis on the time complexity of this method here
        // time O(n) space O(n)
    }

    reverse() {
        // Returns a new reversed version of the linked list
        const reversedList = new DoublyLinkedList();

        let current = this.tail;
        while (current) {
            reversedList.addToTail(current.value);
            current = current.prev;
        }

        return reversedList;
        // Write your hypothesis on the time complexity of this method here
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let current = this.head;

        while (current) {
            // Swap next and prev pointers
            let temp = current.next;
            current.next = current.prev;
            current.prev = temp;

            // Move to the next node
            current = temp;
        }

        // Swap head and tail
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        return this.head;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
