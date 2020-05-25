class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(val) {
        this.values.push(val);
        let newPosition = this.values.length - 1;
        let parent = Math.floor((newPosition - 1) / 2);
        while (this.values[parent] && this.values[parent] < val) {
            let temp = this.values[parent];
            this.values[parent] = val;
            this.values[newPosition] = temp;
            newPosition = parent;
            parent = Math.floor((parent - 1) / 2);
        }

        return this;
    }

    extractMax() {
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
            console.log('l', left)
            console.log('r', right)
            console.log('length', length);
            console.log('values', this.values);
            console.log('here')
            return undefined;
        }

        while (this.values[position] < this.values[right] || this.values[position] < this.values[left]) {
            if (this.values[position] < this.values[right] && this.values[position] < this.values[left]) {
                if (this.values[right] > this.values[left]) {
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

            else if (this.values[position] < this.values[right]) {
                let temp = this.values[position];
                this.values[position] = this.values[right];
                this.values[right] = temp;
                position = right;
            }

            else if (this.values[position] < this.values[left]) {
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


let mbh = new MaxBinaryHeap();
mbh.insert(1);
mbh.insert(3);
mbh.insert(5);
mbh.insert(2);
console.log(mbh);
mbh.extractMax();
console.log(mbh)