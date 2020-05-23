class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            this.tail = this.head;
        }

        else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next; 
        }

        this.length += 1;
        return this;
    }

    traverse() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    pop() {
        if (this.length == 0) {
            return undefined;
        }

        let current = this.head;
        let delayed = current;        
        while (current.next) {
            delayed = current;
            current = current.next;
        }
        let returnVal = current.data;
        delayed.next = null;
        this.tail = delayed;
        this.length -= 1;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return returnVal;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        let returnVal = this.head.data;
        this.head = this.head.next;
        this.length -= 1;

        if (this.length === 0) {
            this.tail = null;
        }

        return returnVal;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (this.head == null) {
            this.head = newNode;
            this.tail = this.head;
        }

        else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }

    get(val) {
        if (val < 0 || val >= this.length) {
            return null;
        }

        let pointer = this.head;
        for (let i = 0; i < val; i++) {
            pointer = pointer.next;
        }

        return pointer;
    }

    set(val, i) {
        let node = this.get(i);

        if (node) {
            node.data = val;
            return true;
        }

        return false;
    }

    insert(val, i) {
        let newNode = new Node(val);
        if (i < 0 || i > this.length) {
            return false;
        }

        else if (i == 0) {
            return !!this.unshift(val);
        }

        else if (i == this.length) {
            return !!this.push(val);
        }

        let node = this.get(i - 1);
        let temp = node.next;
        node.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(i) {
        if (i < 0 || i >= this.length) return undefined;
        if (i == this.length - 1) return this.pop();
        if (i == 0) return this.shift();

        let node = this.get(i - 1);
        let removed = node.next;
        node.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        if (this.length <= 1) return this;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }
}

let list = new SinglyLinkedList();
list.push('tigers');
list.push('gators');
list.push('chiefs');
list.reverse();
console.log(list);