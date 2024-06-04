function appendCharacters(s, t){
    let sCount = 0;
    let tCount = 0;
    while (sCount < s.length){
        if (s[sCount] === t[tCount]){
            sCount++;
            tCount++;
        } else {
            sCount++;
        }
    }
    return t.length - tCount;
}

