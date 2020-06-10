/*
https://www.hackerrank.com/challenges/sparse-arrays/problem
*/

function matchingStrings(strings, queries) {
    let occurences = queries.map(x => 0);
    console.log(occurences);
    for (let i = 0; i < queries.length; i++) {
        for (let j = 0; j < strings.length; j++) {
            if (queries[i] == strings[j]) {
                console.log('here')
                occurences[i]++;
            }
        }
    }
    return occurences;
}

console.log(matchingStrings([ 'aba', 'baba', 'aba', 'xzxb' ], [ 'aba', 'xzxb', 'zzz' ]))