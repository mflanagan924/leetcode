function lastNonEmptyString(s){
    // Create an empty object to store letter frequencies
   let frequencyMap = {};
 
   // Iterate through the string
   for (let i = 0; i < s.length; i++) {
     // If the character is a letter, convert it to lowercase
     if (/[a-z]/i.test(s[i])) {
       let letter = s[i].toLowerCase();
 
       // If the letter is not in the frequency map, initialize its count to 1
       if (!frequencyMap[letter]) {
         frequencyMap[letter] = 1;
       } else {
         // If the letter is already in the frequency map, increment its count
         frequencyMap[letter]++;
       }
     }
   }
 
   // Find the maximum frequency
   let maxFrequency = 0;
   for (const letter in frequencyMap) {
     maxFrequency = Math.max(maxFrequency, frequencyMap[letter]);
   }
 
   // Find letters with the maximum frequency
   let maxLetters = [];
   for (const letter in frequencyMap) {
     if (frequencyMap[letter] === maxFrequency) {
       maxLetters.push(letter);
     }
   }
 
   // Return array of letters with the maximum frequency
   let arr = [];
   for (let i = 0; i < maxLetters.length; i++){
       let smallArr = [];
       let index = s.lastIndexOf(maxLetters[i]);
       smallArr.push(maxLetters[i]);
       smallArr.push(index);
       arr.push(smallArr);
   }
   arr.sort(function(a, b) {
   return a[1] - b[1];
 });
 let ans = "";
 for (let i = 0; i < arr.length; i++){
     ans += arr[i][0];
 }
 return ans;
 }