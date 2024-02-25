function isPossibleToSplit(nums){
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

 // Return the frequency map
 console.log(frequencyMap)
// Loop through the frequencyMap object
for (const key in frequencyMap) {
   if (frequencyMap.hasOwnProperty(key)) {
       const value = frequencyMap[key];
       console.log(value);
       if (value > 2){
           return false;
       }
   }
   
}
return true;
}