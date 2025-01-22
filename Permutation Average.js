function permutationAverage(n){
    function getPermutations(n) {
    // Convert the number to a string and split it into an array of digits
    const digits = n.toString().split("");
  
    // Helper function to compute permutations recursively
    function permute(arr, current = "") {
      if (arr.length === 0) return [parseInt(current)]; // Convert the final string back to an integer
  
      let results = [];
      let seen = new Set(); // To avoid duplicate permutations
  
      for (let i = 0; i < arr.length; i++) {
        if (!seen.has(arr[i])) { // Skip duplicate digits
          seen.add(arr[i]);
          const remaining = arr.slice(0, i).concat(arr.slice(i + 1)); // Remove the current digit
          results = results.concat(permute(remaining, current + arr[i]));
        }
      }
  
      return results;
    }
  
    return permute(digits);
  }
    const permutations = getPermutations(n);
    const sum = permutations.reduce((a, b) => a + b, 0);
    return Math.round(sum/(permutations.length));
  }
  //test