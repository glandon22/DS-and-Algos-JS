/**
 * 
 *  {https://www.hackerrank.com/challenges/arrays-ds/problem} a 
 */
function reverseArray(a) {
    let res = [];
    for (let i = a.length - 1; i >= 0; i--) {
        res.push(a[i]);
    }
    return res;

}

console.log(reverseArray([1,2,3,4,5]));