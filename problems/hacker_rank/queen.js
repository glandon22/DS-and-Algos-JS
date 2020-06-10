/**
 * https://www.hackerrank.com/challenges/queens-attack-2/problem
 */

function queen(n, k, r_q, c_q, obstacles) {
    let board = []
    for (let i = 0; i < n; i++) {
        board.push(new Array(n).fill(0));
    }

    for (let j = 0; j < obstacles.length; j++) {
        board[obstacles[j][1] - 1][obstacles[j][0] - 1] = 1;
    }

    

    console.log(board);
}

console.log(queen(5, 3, 4, 3, [ [ 5, 5 ], [ 4, 2 ], [ 2, 3 ] ]));