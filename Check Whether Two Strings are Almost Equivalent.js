function checkAlmostEquivalent(word1, word2){
    let uniqueWord1 = [[... new Set(word1.split("").sort())]].join("").replace(/,/g,"");
    let uniqueWord2 = [[... new Set(word2.split("").sort())]].join("").replace(/,/g,"");
    // Create an empty array to store item frequencies
  let frequencyArrayWord1 = [];
  // Iterate through the array
  word1.split("").forEach(function (item) {
    // Check if the item is already in the frequency array
    let index = frequencyArrayWord1.findIndex(entry => entry[0] === item);

    if (index === -1) {
      // If the item is not in the frequency array, add it with count 1
      frequencyArrayWord1.push([item, 1]);
    } else {
      // If the item is already in the frequency array, increment its count
      frequencyArrayWord1[index][1]++;
    }
  });
  // Return the frequency array
  frequencyArrayWord1.sort();
    // Create an empty array to store item frequencies
  let frequencyArrayWord2 = [];

  // Iterate through the array
  word2.split("").forEach(function (item) {
    // Check if the item is already in the frequency array
    let index = frequencyArrayWord2.findIndex(entry => entry[0] === item);

    if (index === -1) {
      // If the item is not in the frequency array, add it with count 1
      frequencyArrayWord2.push([item, 1]);
    } else {
      // If the item is already in the frequency array, increment its count
      frequencyArrayWord2[index][1]++;
    }
  });
  // Return the frequency array
  frequencyArrayWord2.sort();
  for (let i = 0; i < frequencyArrayWord1.length; i++){
      if (uniqueWord2.indexOf(uniqueWord1[i]) >= 0){
          let index = uniqueWord2.indexOf(uniqueWord1[i]);
          let diff = Math.abs(frequencyArrayWord1[i][1] - frequencyArrayWord2[index][1]);
          if (diff > 3){
              return false;
          }
      } else {
          if (frequencyArrayWord1[i][1] > 3){
              return false;
          }
      }
  }
  for (let i = 0; i < frequencyArrayWord2.length; i++){
      if (uniqueWord1.indexOf(uniqueWord2[i]) >= 0){
          let index = uniqueWord1.indexOf(uniqueWord2[i]);
          let diff = Math.abs(frequencyArrayWord2[i][1] - frequencyArrayWord1[index][1]);
          if (diff > 3){
              return false;
          }
      } else {
          if (frequencyArrayWord2[i][1] > 3){
              return false;
          }
      }
  }
  return true;
}