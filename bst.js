class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        if (!this.root) {
            this.root = new Node(val);
            return this;
        }

        let newNode = new Node(val);
        let current = this.root;

        while (current) {
            if (val > current.value) {
                if (!current.right){
                    current.right = newNode;
                    return this;
                }

                else current = current.right;
            }

            else if (val < current.value) {
                if (!current.left){
                    current.left = newNode;
                    return this;
                }

                else current = current.left;
            }

            else return this;
        }

        current = newNode;
        return this;
    }

    bfs() {
        if (!this.root) return null;
        let q = [this.root];
        let visited = [];
        while (q.length) {
            let removed = q.shift();
            visited.push(removed.value);
            if (removed.left) q.push(removed.left);
            if (removed.right) q.push(removed.right);
        }

        return visited;
    }

    inOrder() {
        function helper(node) {
            if (!node) return null;

            if (node.left) helper(node.left);
            visited.push(node.value);
            if (node.right) helper(node.right);
        }

        if (!this.root) return null;

        let visited = [];
        let current = this.root;
        helper(current);
        return visited;
    }

    postOrder() {
        function helper(node) {
            if (!node) return null;

            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
            visited.push(node.value);
        }

        if (!this.root) return null;

        let visited = [];
        let current = this.root;
        helper(current);
        return visited;
    }

    preOrder() {
        function helper(node) {
            if (!node) return null;
            visited.push(node.value);
            if (node.left) helper(node.left);
            if (node.right) helper(node.right);
        }

        if (!this.root) return null;

        let visited = [];
        let current = this.root;
        helper(current);
        return visited;
    }
}

let t = new Tree();
t.insert(15);
t.insert(9);
t.insert(25);
t.insert(30);
t.insert(26);
t.insert(7);
t.insert(12);

console.log(t.preOrder());