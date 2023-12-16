function findLucky(arr){
    //get all unqiue numbers in array
    let unique = [... new Set(arr)];
    //empty array to store frequencies
    let freq = [];
    //for loop to find the frequency of each number
    for (let i = 0; i < unique.length; i++){
        let smallArr = [unique[i]];
        let count = 0;
        for (let j = 0; j < arr.length; j++){
            if (unique[i] === arr[j]){
                count++;
            }
        }
        smallArr.push(count);
        freq.push(smallArr);
    }
    //initialize final answer
    let ans = -1;
    //for loop to check if the frequency of a number matches the number is so, if that number is greater than answer change answer to that number
    for (let i = 0; i < freq.length; i++){
        if (freq[i][0] === freq[i][1] && freq[i][0] > ans){
            ans = freq[i][0];
        }
    }
    return ans;
}