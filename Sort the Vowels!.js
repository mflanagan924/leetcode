function sortVowels(s){
    if (s === undefined){
        return "";
    }
    let vowels = ['a', 'e', ' i', 'o', 'u', "A", "E", "I", "O", "U"];
    let ans = "";
    for (let i = 0; i < s.length; i++){
        if (vowels.indexOf(s[i]) >= 0){
            ans += '|';
            ans += s[i];
            ans += '\n';
        } else if (s[i] === " "){
            ans += " "; 
            ans += '|';
            ans += '\n';
        } else {
            ans += s[i];
            ans += '|';
            ans += '\n';
        }
    }
    let final = ans.slice(0, -1); 
    return final;

}

