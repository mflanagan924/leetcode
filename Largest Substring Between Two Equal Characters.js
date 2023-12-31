function maxLengthBetweenEqualCharacters(s){
    let max = -1;
    for (let i = 0; i < s.length - 1; i++){
        for (let j = i + 1; j < s.length; j++){
            if (s[i] === s[j] && j-i-1 > max){
                max = j-i-1;
            }
        }
    }
    return max;
}