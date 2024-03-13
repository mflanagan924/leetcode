/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const triangle = [];

    // Base case: If numRows is 0, return an empty triangle
    if (numRows === 0) {
        return triangle;
    }

    // Start with the first row containing only 1
    triangle.push([1]);

    // Generate subsequent rows based on the previous row
    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        const newRow = [1]; // First element of each row is always 1

        // Calculate the elements in the current row based on the previous row
        for (let j = 1; j < i; j++) {
            newRow.push(prevRow[j - 1] + prevRow[j]);
        }

        newRow.push(1); // Last element of each row is always 1
        triangle.push(newRow);
    }

    return triangle;
};