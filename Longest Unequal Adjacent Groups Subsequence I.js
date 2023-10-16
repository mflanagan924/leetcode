function getWordsInLongestSubsequence(n, words, groups){
    //intialize answer
    ans = [words[0]];
    //for loop to check
    for (let i = 1; i < n; i++){
        if (groups[i] != groups[i - 1]){
            ans.push(words[i]);
        }
    }
    return ans;
}
