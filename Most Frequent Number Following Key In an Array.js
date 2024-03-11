function mostFrequent(nums, key){
    let arr = [];
    for (let i = 0; i < nums.length; i++){
        if (nums[i] === key){
            arr.push(nums[i+1]);
        }
    }
    console.log(arr)
    // Create an object to store the frequency of each number
    let frequencyMap = {};
  
    // Iterate through the array to count the frequency of each number
    arr.forEach(num => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    });

    // Find the number with the highest frequency
    let maxFrequency = 0;
    let mostFrequentNumber;
    for (const [num, frequency] of Object.entries(frequencyMap)) {
        if (frequency > maxFrequency) {
            maxFrequency = frequency;
            mostFrequentNumber = Number(num);
        }
    }

    return mostFrequentNumber;
}