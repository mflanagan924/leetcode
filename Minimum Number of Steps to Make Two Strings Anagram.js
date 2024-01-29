function minSteps(s, t){
    // Create an empty object to store item frequencies
 let frequencyMapS = {};
 let arrS = s.split("");
 // Iterate through the array
 arrS.forEach(function (item) {
   // If the item is not in the frequency map, initialize its count to 1
   if (!frequencyMapS[item]) {
     frequencyMapS[item] = 1;
   } else {
     // If the item is already in the frequency map, increment its count
     frequencyMapS[item]++;
   }
 });
    // Create an empty object to store item frequencies
 let frequencyMapT = {};
 let arrT = t.split("");
 // Iterate through the array
 arrT.forEach(function (item) {
   // If the item is not in the frequency map, initialize its count to 1
   if (!frequencyMapT[item]) {
     frequencyMapT[item] = 1;
   } else {
     // If the item is already in the frequency map, increment its count
     frequencyMapT[item]++;
   }
 });

 let uniqueS = [... new Set(arrS)];
 let ans = 0;
 for (let i = 0; i < uniqueS.length; i++){
     if (frequencyMapT.hasOwnProperty(uniqueS[i]) && frequencyMapT[uniqueS[i]] < frequencyMapS[uniqueS[i]]){
         ans += Math.abs(frequencyMapS[uniqueS[i]] - frequencyMapT[uniqueS[i]]);
     } else if (!frequencyMapT.hasOwnProperty(uniqueS[i])){
         ans += frequencyMapS[uniqueS[i]];
     }
 }
 return ans;
}

