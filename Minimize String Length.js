function minimizedStringLength(s) {
    //split string into array of letters
    let arr = s.split("");
    //find unique letters
    let unique = [... new Set(arr)];
    //return length of unique letters array
    return unique.length;
}
