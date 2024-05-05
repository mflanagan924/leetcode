function isValid(word){
    let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    let consonant = ["b", "B", "c", "C", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
    let symbol = ["@", "#", "$"];
    if (word.length < 3){
        return false;
    }
    let vowelCount = 0;
    let consonantCount = 0;
    let numberCount = 0;
    let symbolCount = 0;
    for (let i = 0; i < word.length; i++){
        if (num.indexOf(word[i]) >= 0){
            numberCount++;
        }
        if (vowel.indexOf(word[i]) >= 0){
            vowelCount++;
        }
        if (consonant.indexOf(word[i]) >= 0){
            consonantCount++;
        }
        if (symbol.indexOf(word[i]) >= 0){
            symbolCount++;
        }
    }

    if (symbolCount > 0){
        return false;
    }
    if (vowelCount > 0 && consonantCount > 0){
        return true;
    }
    return false;
}

