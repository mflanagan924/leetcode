function reversePrefix(word, ch){
    let index = word.indexOf(ch);
    if (index === -1){
        return word;
    }
    let prefix = word.substring(0, index+1);
    let reversePrefix = prefix.split("").reverse().join("");
    let suffix = word.substring(index+1, word.length);
    return reversePrefix + suffix;
}