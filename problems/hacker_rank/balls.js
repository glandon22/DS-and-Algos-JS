/**
 * https://www.hackerrank.com/challenges/organizing-containers-of-balls/problem
 */

function balls(arr) {
    let capacity = {};
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        let digits = 0;
        for (let j = 0; j < arr[i].length; j++) {
            digits += arr[i][j];
            counts[j] ? counts[j] += arr[i][j] : counts[j] = arr[i][j]
        }
        capacity[digits] ? ++capacity[digits] : capacity[digits] = 1;
    }

    for (const number in counts) {
        if (!capacity[counts[number]]) return 'Impossible';
        else capacity[counts[number]]--;
    }
    return 'Possible';
}

console.log(balls([ [ 1, 3, 1 ], [ 2, 1, 2 ], [ 3, 3, 3 ] ]));