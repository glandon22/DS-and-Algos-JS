/**
 * https://www.hackerrank.com/challenges/crush/problem
 */

function arrayManipulation(n, queries) {
    console.log('q',queries);
    let results = new Array(n).fill(0);
    let pos = 0;

    while (pos < queries.length) {
        let start = queries[pos][0] - 1;
        let end = queries[pos][1] - 1;
        let val = queries[pos][2];
        for (let i = start; i <= end; i++) {
            results[i] += val;
        }
        pos++;
    }

    let max = -Infinity;
    results.forEach(x => max = Math.max(x, max));
    return max;
}
console.log(arrayManipulation(10, [ [ 2, 6, 8 ], [ 3, 5, 7 ], [ 1, 8, 1 ], [ 5, 9, 15 ] ]));