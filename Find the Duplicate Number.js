function findDuplicate(nums){
    // Create an empty object to store item frequencies
  let frequencyMap = {};

  // Iterate through the array
  nums.forEach(function (item) {
    // If the item is not in the frequency map, initialize its count to 1
    if (!frequencyMap[item]) {
      frequencyMap[item] = 1;
    } else {
      // If the item is already in the frequency map, increment its count
      frequencyMap[item]++;
    }
  });
  for (let i = 1; i < nums.length; i++){
      if (frequencyMap[i] > 1){
          return i;
      }
  }
}