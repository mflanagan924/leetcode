function maximumNumberOfStringPairs(words){
    //empty array to store the reverse of the words
    let wordsReverse = [];
    //for loop to get the reverse of each item in the words array
    for(let i = 0; i < words.length; i++){
        wordsReverse.push(words[i].split("").reverse().join(""));
    }
    //intialize answer
    let count = 0;
    //for loop to compare each word in words array with words from the reverse words array where 0 <= i < j < words.length
    for (let i = 0; i < words.length - 1; i++){
        for (let j = i+1; j < wordsReverse.length; j++){
            if (words[i] === wordsReverse[j]){
                count += 1;
            }
        }
    }
    return count;
}