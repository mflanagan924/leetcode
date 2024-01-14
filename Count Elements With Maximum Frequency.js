function maxFrequencyElements(nums){
    // Create an empty object to store number frequencies
  let frequencyMap = {};

  // Iterate through the array
  nums.forEach(function (item) {
    // If the item is a number, convert it to a string for consistent keys
    if (typeof item === 'number' && isFinite(item)) {
      let number = item.toString();

      // If the number is not in the frequency map, initialize its count to 1
      if (!frequencyMap[number]) {
        frequencyMap[number] = 1;
      } else {
        // If the number is already in the frequency map, increment its count
        frequencyMap[number]++;
      }
    }
  });

  // Return the frequency map
  let valuesArray = Object.values(frequencyMap);

  // Use Math.max.apply to find the maximum value in the array
  let maxValue = Math.max.apply(null, valuesArray);

  // Initialize the total sum
  let totalSum = 0;

  // Traverse the object and add values equal to the maximum to the total
  for (let key in frequencyMap) {
    if (frequencyMap.hasOwnProperty(key) && frequencyMap[key] === maxValue) {
      totalSum += frequencyMap[key];
    }
  }

  return totalSum;
}




