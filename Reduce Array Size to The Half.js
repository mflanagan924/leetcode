function minSetSize(arr){
    // Step 1: Count the frequencies using a Map
   const freqMap = new Map();
   for (let num of arr) {
       if (freqMap.has(num)) {
           freqMap.set(num, freqMap.get(num) + 1);
       } else {
           freqMap.set(num, 1);
       }
   }
   
   // Step 2: Extract the frequencies into an array
   const freqArray = Array.from(freqMap.values());
   
   // Step 3: Sort the frequencies in descending order
   freqArray.sort((a, b) => b - a);
    let ans = 0;
    let count = 0;
    let i = 0;
    while (count < arr.length/2){
        count += freqArray[i];
        i++;
        ans++;
    }
    return ans;
}