/**
 * https://www.hackerrank.com/challenges/staircase/problem
 */

function stairs(n) {
    let stairs = [];
    for (let i = 0; i < n; i++) {
        let spaces = new Array(n - i - 1).fill(' ');
        let nums = new Array(i + 1).fill('#');
        spaces = spaces.concat(nums);
        console.log(spaces.join(''));
    }
}


console.log(stairs(5));