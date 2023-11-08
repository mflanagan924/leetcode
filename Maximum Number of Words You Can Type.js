function canBeTypedWords(text, brokenLetters){
    //split text into array of words
    let arr = text.split(" ");
    //initialize final answer to the number of words
    let ans = arr.length;
    //for loop to check if each word can be typed or not based on broken letters
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < brokenLetters.length; j++){
            if (arr[i].indexOf(brokenLetters[j]) >= 0){
                ans -= 1;
                break;
            }
        }
    }
    return ans;
}