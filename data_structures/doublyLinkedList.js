class Node {
    constructor(data) {
        this.data = data;
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

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }

        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let returnVal = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }

        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            returnVal.prev = null;
        }

        this.length--;
        return returnVal;
    }

    shift() {
        if (!this.head) return undefined;
        let returnVal = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        }

        else {
            this.head = this.head.next;
            this.head.prev = null;
            returnVal.next = null;
        }

        this.length--;
        return returnVal;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }

        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;  
        }

        this.length++;
        return this;        
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        //searching in first half of list
        if (index / (this.length - 1) <= .5) {
            let returnVal = this.head;
            for (let i = 0; i < index; i++) {
                returnVal = returnVal.next;
            }
            return returnVal;
        }

        else {
            let returnVal = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                returnVal = returnVal.prev;
            }
            return returnVal;
        }
    }

    set(val) {
        let node = this.get(val);
        if (node) {
            node.data = val;
            return true;
        }

        return false;
    }

    insert(val, i) {
        if (i < 0 || i > this.length) {
            return undefined;
        }

        else if (i == 0) {
            return this.unshift(val)
        }

        else if (i == this.length) {
            return this.push(val);
        }
        let newNode = new Node(val);
        let prevNode = this.get(i - 1);
        let downstream = prevNode.next;
        prevNode.next = newNode;
        newNode.prev = prevNode;
        downstream.prev = newNode;
        newNode.next = downstream;
        this.length++
        return this;
    }

    remove(i) {
        if (i < 0 || i >= this.length) return undefined;
        else if (i == 0) return this.shift();
        else if (i == this.length - 1) return this.pop();

        let node = this.get(i);
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        node.next = null;
        node.prev = null;
        this.length--;
        return node;
        
    }
}

let list = new DoublyLinkedList();
list.push('hi');
list.push('bye');
list.push('ok');
console.log(list.remove(1));
console.log(list);