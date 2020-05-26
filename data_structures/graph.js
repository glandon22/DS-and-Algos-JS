class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVTX(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        if (!v1 || !v2) return undefined;
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
        return this;
    }

    removeEdge(v1,v2) {
        if (!v1 || !v2) return undefined;
        let v1Edge = this.adjacencyList[v1].indexOf(v2);
        let v2Edge = this.adjacencyList[v2].indexOf(v1);
        if (v1Edge === -1 || v2Edge === -1) return undefined;
        this.adjacencyList[v1].splice(v1Edge, 1);
        this.adjacencyList[v2].splice(v2Edge, 1);
    }

    removeVTX(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;
        let edges = this.adjacencyList[vertex];
        delete this.adjacencyList[vertex];
        for (let i = 0; i  < edges.length; i++) {
            this.adjacencyList[edges[i]] = this.adjacencyList[edges[i]].filter(vtx => vtx != vertex);
        }

        return this;
    }

    DFS(vertex) {
        let results = [];
        let visited = {};
        const adjacencyList = this.adjacencyList;
        (function helper(vtx) {
            if (!vtx) return;
            results.push(vtx);
            visited[vtx] = true;
            adjacencyList[vtx].forEach(neighbor => {
                if (!visited[neighbor]) {
                    return helper(neighbor);
                }
            });
        })(vertex);
        return results;
    }
}

let g = new Graph();
g.addVTX("a");
g.addVTX("b");
g.addVTX("c");
g.addVTX("d");
g.addVTX("e");
g.addVTX("f");
g.addVTX("g");
g.addEdge("a", "b");
g.addEdge("a", "c");
g.addEdge("c", "e");
g.addEdge("e", "d");
g.addEdge("e", "f");
g.addEdge("f", "d");
g.addEdge("d", "b");
g.addEdge("g", "b");
console.log('call',g.DFS("a"));