function findAndReplacePattern(words, pattern){
    //array to store all letters of alphabet so that there is enough combinations
    var alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    //returns all unique letters in pattern
    let unique = [... new Set(pattern)];
    //empty string to store the pattern
    let uniquePattern = "";
    //for loop to assign numbers to pattern to make the patterns uniform
   for (let i = 0; i < pattern.length; i++){
        let x = unique.indexOf(pattern[i])
        uniquePattern += alphabetArray[x];
    }
    //empty array to store unique letters in words array
    let uniqueWords = [];
    //for loop to find the unique letters in words array
    for (let i = 0; i < words.length; i++){
        uniqueWords.push([... new Set(words[i])]);
    }
    //empty array to store pattern of letters in words array
    let uniqueWordsPatternArray = [];
    //for loop to find the pattern of letters in words array to make them uniform (ie be able to compare to the pattern)
    for (let i = 0; i < uniqueWords.length; i++){
        let uniqueWordsPattern = "";
        for (let j = 0; j < words[i].length; j++){
            let x = uniqueWords[i].indexOf(words[i][j]);
            uniqueWordsPattern += alphabetArray[x];
        }
        uniqueWordsPatternArray.push(uniqueWordsPattern);
    }
    //empty array to store the answer
    let ans = [];
    //for loop to compare the pattern to the words and push the words that match the pattern
    for (let i = 0; i < uniqueWordsPatternArray.length; i++){
        if (uniqueWordsPatternArray[i] === uniquePattern){
            ans.push(words[i]);
        }
    }
    return ans;
}