class Tree {
    constructor() {
        this.root = null;
    }

    insert(val, weight) {
        if (!val) return null;
        if (!this.root) {
            let newNode = new Node(val[0]);
            this.root = newNode;
        }

        let pointer = 1;
        let current = this.root;
        while (pointer < val.length) {
            let foundCurrChar = false;
            for (let i = 0; i < current.subNodes.length; i++) {
                if (current.subNodes[i].value == val[pointer]) {
                    current = current.subNodes[i];
                    pointer++;
                    foundCurrChar = true;
                    break; 
                }
            }

            if (!foundCurrChar) {
                let newNode = new Node(val[pointer]);
                current.subNodes.push(newNode);
                current = current.subNodes[current.subNodes.length - 1];
                pointer++;
            }
        }
        current.weight = weight;
        return this;
    }

    getWords(start) {
        function helper(node, visited) {
            visited.push(node.value);
            if (node.weight) {
                words.push([visited.join(''), node.weight]);
            }

            if (!node.subNodes.length) return;

            for (const n of node.subNodes) {
                helper(n, visited.slice(0));
            }
        }

        if (!this.root) return null;
        let current = this.root;
        if (start) {
            //words dont start with same letter
            if (start[0] != current.value) return null;
            let pointer = 1;
            while (pointer < start.length) {
                let foundCurrChar = false;
                for (let i = 0; i < current.subNodes.length; i++) {
                    if (current.subNodes[i].value == start[pointer]) {
                        current = current.subNodes[i];
                        pointer++;
                        foundCurrChar = true;
                        break; 
                    }
                }
                //the passed substring does not exist in tree
                if (!foundCurrChar) {
                    return null;
                }
            }
        }
        
        let words = [];
        helper(current, [start.slice(0, -1)]);

        words.sort((function(index){
            return function(a, b){
                return (a[index] === b[index] ? 0 : (a[index] < b[index] ? -1 : 1));
            };
        })(1));
        words = words.map(x => x[0]);
        return words;
    }
}

class Node {
    constructor(val, weight) {
        this.value = val;
        this.weight = null;
        this.subNodes = [];
    }
}

let t = new Tree();
t.insert('couch', 100);
t.insert('ca', 1);
t.insert('car', 101);
t.insert('court', 102);
t.insert('courts', 103);
t.insert('corvette', 99);
console.log(JSON.stringify(t, null, 4));
console.log(t.getWords('cou'));