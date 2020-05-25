class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        let newPosition = this.values.length - 1;
        let parent = Math.floor((this.values.length - 1) / 2);
        while (this.values[parent] && this.values[parent].priority > newNode.priority) {
            let temp = this.values[parent];
            this.values[parent] = newNode;
            this.values[newPosition] = temp;
            newPosition = parent;
            parent = Math.floor((parent - 1) / 2);
        }

        return this;
    }

    dequeue() {
        if (this.values.length == 0) {
            return undefined;
        }

        else if (this.values.length == 1) {
            let max = this.values[0];
            this.values = [];
            return max;
        }
        let length = this.values.length;
        let max = this.values[0];
        let lastElem = this.values.pop();
        this.values[0] = lastElem;
        let position = 0;
        let left = 2 * position + 1;
        let right = 2 * position + 2;
        if (left >= length) {
            return undefined;
        }

        while ((right < length && left < length) && (this.values[position].priority > this.values[right].priority || this.values[position].priority > this.values[left].priority)) {
            if (this.values[position].priority > this.values[right].priority && this.values[position].priority > this.values[left].priority) {
                if (this.values[right].priority < this.values[left].priority) {
                    let temp = this.values[position];
                    this.values[position] = this.values[right];
                    this.values[right] = temp;
                    position = right;
                }

                else {
                    let temp = this.values[position];
                    this.values[position] = this.values[left];
                    this.values[left] = temp;
                    position = left;
                } 
            }

            else if (this.values[position].priority > this.values[right].priority) {
                let temp = this.values[position];
                this.values[position] = this.values[right];
                this.values[right] = temp;
                position = right;
            }

            else if (this.values[position].priority > this.values[left].priority) {
                let temp = this.values[position];
                this.values[position] = this.values[left];
                this.values[left] = temp;
                position = left;
            }

            left = 2 * position + 1;
            right = 2 * position + 2;
        }

        return max;
    }
}

let pq = new PriorityQueue();
pq.enqueue("eat chiken", 10);
pq.enqueue("eat beef", 1);
pq.enqueue("eat", 3);
pq.enqueue("eat more", 15);
pq.enqueue("drink", 0);
pq.enqueue("drink", 7);
console.log(pq.dequeue());
console.log(pq);