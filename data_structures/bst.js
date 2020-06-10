function bfs(tree) {
    if (!tree) return null;
    let q = [tree.root];
    let vals = [];

    while (q.length) {
        //console.log('q', q)
        let removed = q.shift();
        vals.push(removed.value);
        if (removed.left) {
            q.push(removed.left);
        }

        if (removed.right) {
            q.push(removed.right);
        }
    }

    return vals;
}

class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
} 

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let start = this.root;
        while (true) {
            if (val > start.value) {
                if (start.right) {
                    start = start.right;
                }

                else {
                    start.right = newNode;
                    return this;
                }
            }

            else if (val < start.value) {
                if (start.left) {
                    start = start.left;
                }

                else {
                    start.left = newNode;
                    return this;
                }
            }

            else {
                return this;
            }
        }
    }

    find(val) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (val == current.value) {
                return current;
            }

            else if (val < current.value) {
                current = current.left;
            }

            else {
                current = current.right;
            }
        }

        return false;
    }

    BFS() {
        if (!this.root) return null;
        let q = [this.root];
        let vals = [];

        while (q.length) {
            //console.log('q', q)
            let removed = q.shift();
            vals.push(removed.value);
            if (removed.left) {
                q.push(removed.left);
            }

            if (removed.right) {
                q.push(removed.right);
            }
        }

        return vals;
    }

    preOrder() {
        function helper(node) {
            visited.push(node.value);

            if (node.left) {
                helper(node.left);
            }

            if (node.right) {
                helper(node.right);
            }
        }

        if (!this.root) return null;

        let visited = [];
        let current = this.root;
        helper(current);
        return visited;
        
    }

    postOrder() {
        function helper(node) {
            if (node.left) {
                helper(node.left);
            }

            if (node.right) {
                helper(node.right);
            }

            visited.push(node.value);
        }

        if (!this.root) return null;

        let visited = [];
        let current = this.root;
        helper(current);
        return visited;
    }

    inOrder() {
        function helper(node) {
            if (node.left) {
                helper(node.left);
            }

            visited.push(node.value);

            if (node.right) {
                helper(node.right);
            }
        }

        if (!this.root) return null;

        let visited = [];
        let current = this.root;
        helper(current);
        return visited;
    }

    preOrder2() {
        function helper(node) {
            visitedVals.push(node.value);

            if (node.left) {
                helper(node.left);
            }

            if (node.right) helper(node.right);

        }

        if (!this.root) return null;

        let visitedVals = [];
        let current = this.root;
        helper(current);
        return visitedVals;
    }

    inOrder2() {
        function helper(node) {
            if (node.left) {
                helper(node.left);
            }

            visitedVals.push(node.value);

            if (node.right) helper(node.right);

        }

        if (!this.root) return null;

        let visitedVals = [];
        let current = this.root;
        helper(current);
        return visitedVals;
    }

    postOrder2() {
        function helper(node) {
            if (node.left) {
                helper(node.left);
            }

            if (node.right) helper(node.right);
            visitedVals.push(node.value);
        }

        if (!this.root) return null;

        let visitedVals = [];
        let current = this.root;
        helper(current);
        return visitedVals;
    }

    bfs2() {
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
}

let bst = new BST();
bst.insert(7);
bst.insert(5);
bst.insert(9);
bst.insert(4);
bst.insert(6);
bst.insert(8);
bst.insert(10);
console.log(bst);