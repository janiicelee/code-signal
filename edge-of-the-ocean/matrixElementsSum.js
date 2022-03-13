function solution(matrix) {
    var total = 0;
    for(var i=0; i<matrix.length; i++) {
        for(var j=0; j<matrix[i].length; j++) {
            // check if number of rows is less than the length of matrix
            if(matrix[i][j] === 0 && i+1 <matrix.length) {
                matrix[i+1][j] =0;

            }
            total += matrix[i][j];
        }
    }
    console.log(matrix);
    console.log(total);
    return total;
}

solution([[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]);
