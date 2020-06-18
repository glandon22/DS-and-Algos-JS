/**
 * https://www.hackerrank.com/challenges/the-grid-search/problem
 */

function grid(grid, sub) {
    let row = 0;
    let col = 0;
    let subRow = 0;
    let subCol = 0;
    while (row < grid[0].length) {
        //exceeded length of column now we go to next row
        if (col + sub[0].length - subCol > grid[0].length) {
            console.log('here')
            row++;
            col = 0;
            continue;
        }
        //exceeded rows
        else if (row + sub.length - subRow > grid.length) {
            console.log('here1')
            row += sub.length;
            continue;
        }

        else if (grid[row][col] == sub[subRow][subCol]) {
            subCol++;
            if (subCol == sub[0].length) {
                subCol = 0;
                subRow++;
                //we have traversed all valuies in sub grid
                if (subRow == sub.length) {
                    return 'YES';
                }

                row++;
                col = col - sub[0].length + 1;
                continue;
            }
            col++;
        }

        else {
            if (!subRow && !subCol) {
                col++;
            }
            
            else {
                col = col - subCol + 1;
                row -= subRow;
                subCol = 0;
                subRow = 0;
            }
        }
    }

    return 'NO';
}
console.log(grid(['123412'.split(''),'561212'.split(''),'123634'.split(''),'781288'.split('')], [[1,2], [3,5]]));
//console.log(grid([ '400453592126560',  '114213133098692',  '474386082879648',  '522356951189169',  '887109450487496',  '252802633388782',  '502771484966748',  '075975207693780',  '511799789562806',  '404007454272504',  '549043809916080',  '962410809534811',  '445893523733475',  '768705303214174',  '650629270887160' ], [ '99', '99' ]));