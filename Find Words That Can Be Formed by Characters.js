function countCharacters(words, chars){
    //empty array to store words that have letters not in chars
    let arr = [];
    //for loop to find the words in words array that have letters that don't appear in chars
    for (let i = 0; i < words.length; i++){
        for (let j = 0; j < words[i].length; j++){
            if (chars.indexOf(words[i][j]) < 0 && arr.indexOf(words[i]) < 0){
                arr.push(words[i]);
            }
        }
    }
    //empty array to store words in words array that have letters in chars
    let checkArr = [];
    //empty array to store the index of those numbers
    let arrIndex = [];
    //for loop to find the words that have all of their letters in chars as well as their index in words array
    for (let i = 0; i < words.length; i++){
        if (arr.indexOf(words[i]) < 0){
            checkArr.push(words[i]);
            arrIndex.push(words.indexOf(words[i]));
        }
    }
    //function to get the frequency of letters
    const counter = s => [...s].reduce((a, c) => (a[c] = ++a[c] || 1) && a, {})
    //get the frequency of letters in chars string
    let charsCounter = counter(chars);
    //empty array to store the frequency of letters in the checkArr (which is the words in words array that have all of their letters in chars)
    let wordsCounterArr = [];
    //for loop to get the frequency of these letters
    for (let i = 0; i < checkArr.length; i++){
        let wordsCounter = counter(checkArr[i]);
        wordsCounterArr.push(wordsCounter);
    }
    //empty array to store the difference in letter frequency
    let arrDiff = [];
    //for loop to find the difference in letter frequency between the letters in the checkArr and the chars string
    for (let i = 0; i < wordsCounterArr.length; i++){
        let smallArr = [];
        for (let j = 0; j < Object.keys(wordsCounterArr[i]).length; j++){
            let letter = Object.keys(wordsCounterArr[i])[j];
            let diff = charsCounter[letter] - wordsCounterArr[i][letter];
            smallArr.push(diff);
        }
        arrDiff.push(smallArr);
    }
    //empty array to store the index of words that have more letters freq than chars
    let wrong = [];
    for (let i = 0; i < arrDiff.length; i++){
        for (let j = 0; j < arrDiff[i].length; j++){
            if (arrDiff[i][j] < 0){
                wrong.push(i);
            }
        }
    }
    //for loop to modify the original arrIndex if there is a diff less than zero (which means that the word has too many letters)
    for (let i = 0; i < wrong.length; i++){
        arrIndex[wrong[i]] = "a";
    }
    //empty array to store the index of words with correct frequency
    let trueIndex = []
    //for loop to store the original index of words with the correct frequency
    for (let i = 0; i < arrIndex.length; i++){
        if (arrIndex[i] !== "a"){
            trueIndex.push(arrIndex[i]);
        }
    }
    //initialize answer
    let ans = 0;
    //for loop to Return the sum of lengths of all good strings in words
    for (let i = 0; i < trueIndex.length; i++){
        ans += words[trueIndex[i]].length;
    }
    return ans;
}