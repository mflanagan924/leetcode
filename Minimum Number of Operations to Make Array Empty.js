function minOperations(nums){
    // Create an empty array to store item frequencies
    let frequencyArray = [];
  
    // Iterate through the array
    nums.forEach(function (item) {
      // Check if the item is already in the frequency array
      let index = frequencyArray.findIndex(entry => entry[0] === item);
  
      if (index === -1) {
        // If the item is not in the frequency array, add it with count 1
        frequencyArray.push([item, 1]);
      } else {
        // If the item is already in the frequency array, increment its count
        frequencyArray[index][1]++;
      }
    });
  
    // Return the frequency array
    let ans = 0;
    for (let i = 0; i < frequencyArray.length; i++){
        if (frequencyArray[i][1] === 1){
            return -1;
        }
        let value = frequencyArray[i][1];
        while (value > 0){
            if (value%3 === 0){
                ans++;
                value -= 3;
            } else {
                ans++;
                value -= 2;
            }
        }
    }
    return ans;
  }
  