class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

function insertNodeAtHead(head, data) {
    let newNode = new Node(data);
    if (!head) {
        head.next = newNode; 
        return head;
    }

    newNode.next = head;
    head = newNode;
    return head;
}