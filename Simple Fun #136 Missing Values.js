function missingValues(arr) {
    const counts = {};
  
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  
  console.log(counts);
    const targetValue = 2;
    const targetValueTwo = 1;
  const matchingKeys = [];
    const matchingKeysTwo = [];
  
  for (let key in counts) {
      if (counts[key] === targetValue) {
          matchingKeys.push(key);
      } else if (counts[key] === targetValueTwo){
        matchingKeysTwo.push(key);
      }
  }
    console.log(matchingKeys)
    
    return matchingKeys[0] * matchingKeysTwo[0] * matchingKeysTwo[0];
  }