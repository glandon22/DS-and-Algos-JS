function diagonalDiff(matrix) {
    if (!matrix.length) return null;
    //matrix is not square
    else if (matrix.length != matrix[0].length) return null;

    let leftDiag = 0;
    let rightDiag = 0;
    for (let i = 0; i < matrix.length; i++) {
        leftDiag += matrix[i][i];
        rightDiag += matrix[matrix.length - 1 - i][i];
        console.log('right',matrix[matrix.length - 1 - i][i])
        console.log('left', matrix[i][i])
    }
    return Math.abs(rightDiag - leftDiag);
}

console.log(diagonalDiff([[1,2,3], [4,5,6], [9,8,9]]))