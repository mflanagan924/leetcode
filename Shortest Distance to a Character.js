function shortestToChar(s, c) {
    //empty array to store the index of the occurance of letter "c" in in string "s"
    let cIndex = [];
    //for loop to find the index
    for (let i = 0; i < s.length; i++){
        if (s[i] === c){
            cIndex.push(i);
        }
    }
    //empty array to store the answer
    let ans = [];
    //for loop to find the distance from index i to the closest occurrence of character c in s (absolute value)
    for (let i = 0; i < s.length; i ++){
        let smallArr = [];
        for (let j = 0; j < cIndex.length; j++){
            smallArr.push(Math.abs(i - cIndex[j]));
        }
        ans.push(Math.min(...smallArr));
    }
    return ans;
}