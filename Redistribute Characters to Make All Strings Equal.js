function makeEqual(words){
    if (words.length === 1){
        return true;
    }
    let string = "";
    for (let i = 0; i < words.length; i++){
        string += words[i];
    }
    let unique = [... new Set(string)];
    let freq = [];
    for (let i = 0; i < unique.length; i++){
        let smallArr = [];
        let count = 0;
        for (let j = 0; j < string.length; j++){
            if (unique[i] === string[j]){
                count++;
            }
        }
        smallArr.push(unique[i]);
        smallArr.push(count);
        freq.push(smallArr);
    }
    let wordsLength = words.length;
    for (let i = 0; i < freq.length; i++){
        if (freq[i][1] % wordsLength !== 0){
            return false;
        }
    }
    return true;
}