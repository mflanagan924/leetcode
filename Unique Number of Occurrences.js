function uniqueOccurrences(arr){
    let frequencyArray = [];

 // Iterate through the array
 arr.forEach(function (item) {
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
 let freq = [];
 for (let i = 0; i < frequencyArray.length; i++){
     freq.push(frequencyArray[i][1]);
 }
 let unique = [... new Set(freq)];
 if (freq.length === unique.length){
     return true;
 }
 return false;
}