function distributeCandies(candyType){
    let max = candyType.length/2;
    let unique = [... new Set(candyType)];
    let uniqueLength = unique.length;
    if (uniqueLength < max){
        return uniqueLength;
    } else {
        return max;
    }
}