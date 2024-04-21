function numberOfSpecialChars(word){
    word.split("");
    let unique = [...new Set(word)];
    let ans = 0;
    for (let i = 0; i < unique.length; i++){
        if (unique[i] === unique[i].toLowerCase()){
            let upper = unique[i].toUpperCase();
            if (unique.indexOf(upper) >= 0){
                ans++;
            }
        }
    }
    return ans;
}
