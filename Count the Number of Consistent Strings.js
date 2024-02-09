function countConsistentStrings(allowed, words){
    let ans = 0;
    for (let i = 0; i < words.length; i++){
        for (let j = 0; j < words[i].length; j++){
            if (allowed.indexOf(words[i][j]) < 0){
                ans++;
                break;
            }
        }
    }
    return words.length - ans;
}