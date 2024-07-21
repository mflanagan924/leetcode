function luckyNumbers(matrix){
    row = [];
    for (let i = 0; i < matrix.length; i++){
        row.push(Math.min(...matrix[i]));
    }
    // Check if the matrix is empty
  if (matrix.length === 0) return [];
  
  // Initialize an empty array for the transposed matrix
  let transposed = [];
  
  // Iterate over the columns of the original matrix
  for (let col = 0; col < matrix[0].length; col++) {
    // Create a new row for the transposed matrix
    let newRow = [];
    
    // Iterate over the rows of the original matrix
    for (let row = 0; row < matrix.length; row++) {
      // Add the current element to the new row
      newRow.push(matrix[row][col]);
    }
    
    // Add the new row to the transposed matrix
    transposed.push(newRow);
  }
  
  let column = [];
  for (let i = 0; i < transposed.length; i++){
      column.push(Math.max(...transposed[i]));
  }
  let ans = [];
  for (let i = 0; i < row.length; i++){
      if (column.indexOf(row[i]) >= 0){
          ans.push(row[i]);
      }
  }
  return ans;
}