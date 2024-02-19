function countPrefixSuffixPairs(words){
    //initialize answer
    let ans = 0;
    //function to check if prefix and suffix of word2 is the same as word1
    function isPrefixAndSuffix(word1, word2){
        let words1Reverse = word1.split("").reverse().join("");
        let words2Reverse = word2.split("").reverse().join("");
        if (word2.indexOf(word1) === 0 && words2Reverse.indexOf(words1Reverse) === 0){
            ans++;
        }
    }
    //double for loop to check if i < j, and isPrefixAndSuffix(words[i], words[j]) is true
    for (let i = 0; i < words.length - 1; i++){
        for (let j = i + 1; j < words.length; j++){
            isPrefixAndSuffix(words[i], words[j]);
        }
    }
    return ans;
}