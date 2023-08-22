function isAcronym(words, s){
    //empty string to store acronym
    let acronym = "";
    //for loop to get the acronym
    for (let i = 0; i < words.length; i++){
        acronym += words[i][0];
    }
    //compare acronym with s string
    if (acronym === s){
        return true;
    }
    return false;
}
