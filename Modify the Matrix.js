function modifiedMatrix(matrix){
    // Initialize an array to store the extracted columns
   let columns = [];

   // Iterate over the columns of the matrix
   for (let i = 0; i < matrix[0].length; i++) {
       // Initialize an array to store the elements of the current column
       let column = [];

       // Iterate over the rows of the matrix
       for (let j = 0; j < matrix.length; j++) {
           // Push the element at the current column index into the column array
           column.push(matrix[j][i]);
       }

       // Push the column array into the columns array
       columns.push(column);
   }

   // Return the extracted columns
   let answer = [];
   for (let i = 0; i < matrix.length; i++){
       let smallArr = [];
       for (let j = 0; j < matrix[i].length; j++){
           if (matrix[i][j] !== -1){
               smallArr.push(matrix[i][j]);
           } else {
               smallArr.push(Math.max(...columns[j]));
           }
       }
       answer.push(smallArr);
   }
   return answer;
}