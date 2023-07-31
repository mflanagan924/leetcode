function splitWordsBySeparator(words, seperator){
    //empty array to store the split 
    let arr = [];
    //for loop to split words array by seperator
    for (let i = 0; i < words.length; i++){
        arr.push(words[i].split(seperator));
    }
    //empty array to store the answer
    let ans = [];
    //for loop to check each index, if it is not empty push that value to the answer array
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            if (arr[i][j] !== ""){
                ans.push(arr[i][j]);
            }
        }
    }
    return ans;
}