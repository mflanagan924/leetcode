function getLucky(s, k){
    let abc = { 
        "a": 1, "b": 2, "c": 3, "d": 4, "e": 5, "f": 6, "g": 7, "h": 8, "i": 9, 
        "j": 1, "k": 2, "l": 3, "m": 4, "n": 5, "o": 6, "p": 7, "q": 8, 
        "r": 9, "s": 1+9, "t": 2, "u": 3, "v": 4, "w": 5, "x": 6, "y": 7, "z": 8 
    };
    let initial = 0;
    for (let i = 0; i < s.length; i++){
        initial += abc[s[i]];
    }
    for (let i = 0; i < k - 1; i++){
        let string = initial.toString();
        let temp = 0;
        for (let j = 0; j < string.length; j++){
            temp += +string[j];
        }
        initial = temp;
    }
    return initial;
}
