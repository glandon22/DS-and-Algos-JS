/**
 * https://www.hackerrank.com/challenges/absolute-permutation/problem
 */

function count(n, k) {
    if (k == 0) {
        let arr = [];
        for (let i = 1; i <= n; i++) {
            arr.push(i);
        }
        return arr;
    }
    let arr = new Array(n);
    if (n % (2 * k) !== 0) return [-1];
    let add = true;
    for (let i = 0; i < n; i++) {
        if (add) arr[i] = i + k + 1;
        else arr[i] = i - k + 1;
        
        if ((i + 1) % k == 0) add = !add;
    } 
    
    return arr;
}

console.log(count(3, 0))