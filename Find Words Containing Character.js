function findWordsContaining(words, x){
    //initialize answer array
    let ans = [];
    //for loop to check each word
    for (let i = 0; i < words.length; i++){
        //if word has letter than push index to answer array
        if (words[i].indexOf(x) >= 0){
            ans.push(i);
        }
    }
    return ans;
}