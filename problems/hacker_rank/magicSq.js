/**
 * https://www.hackerrank.com/challenges/magic-square-forming/problem
 */

function rotate(arr) {
    return [[arr[2][0],arr[1][0],arr[0][0]],[arr[2][1],arr[1][1],arr[0][1]],[arr[2][2],arr[1][2],arr[0][2]]];
}

function mirror(arr) {
    return [[arr[0][2],arr[0][1],arr[0][0]], [arr[1][2],arr[1][1],arr[1][0]], [arr[2][2],arr[2][1],arr[2][0]]];
}

function generate(arr) {
    let magicSquares = [];
    let pointer = 0;
    while(pointer < 4) {
        arr = rotate(arr);
        magicSquares.push(arr);
        pointer++;
    }

    arr = mirror(arr);
    pointer = 0;
    while(pointer < 4) {
        arr = rotate(arr);
        magicSquares.push(arr);
        pointer++;
    }

    return magicSquares;
}

function magic(s) {
    let cost = Infinity;
    let magicSquares =  [ [ [ 4, 3, 8 ], [ 9, 5, 1 ], [ 2, 7, 6 ] ],
                        [ [ 2, 9, 4 ], [ 7, 5, 3 ], [ 6, 1, 8 ] ],
                        [ [ 6, 7, 2 ], [ 1, 5, 9 ], [ 8, 3, 4 ] ],
                        [ [ 8, 1, 6 ], [ 3, 5, 7 ], [ 4, 9, 2 ] ],
                        [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ],
                        [ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 6 ] ],
                        [ [ 8, 3, 4 ], [ 1, 5, 9 ], [ 6, 7, 2 ] ],
                        [ [ 6, 1, 8 ], [ 7, 5, 3 ], [ 2, 9, 4 ] ] ];
    for (let i = 0; i < magicSquares.length; i++) {
        let count = 0;
        for (let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                count += Math.abs(magicSquares[i][j][k] - s[j][k]);
            }
        }
        cost = Math.min(count,cost);
    }
    return cost;
}

console.log(magic([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5 ] ]));