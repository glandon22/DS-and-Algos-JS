class HashMap {
    constructor(size = 33) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let prime = 167;

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let val = char.charCodeAt(0);
            total = (total * prime + val) % this.keyMap.length;
        }

        return total;
    }

    set(val) {
        let hash = this._hash(val[0]);
        if (this.keyMap[hash] == undefined) this.keyMap[hash] = [val];
        else this.keyMap[hash].push(val);
        return this;
    }

    get(val) {
        let hash = this._hash(val);
        if (this.keyMap[hash]) {
            for (let i = 0; i < this.keyMap[hash].length; i++) {
                if (this.keyMap[hash][i][0] == val) return this.keyMap[hash][i];
            } 
        }
       
        return undefined;
    }

    keys() {
        let keys = new Set();
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    keys.add(this.keyMap[i][j][0]);
                }
            }
        }

        return keys;
    }

    values() {
        let values = new Set();
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    values.add(this.keyMap[i][j][1]);
                }
            }
        }

        return values;
    }
}

let hm = new HashMap(31);
hm.set(["tigers", "mizzou"]);
hm.set(["tigers1", "trtrtrtrt"]);
hm.set(["fdsdfssfd", "mizzsdfdfsdfsu"]);
console.log(hm.keys());
console.log(hm.values());