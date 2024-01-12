function halvesAreAlike(s){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let a = 0;
    let b = 0;
    for (let i = 0; i < s.length/2; i++){
        if (vowels.indexOf(s[i]) >= 0){
            a++;
        }
    }
    for (let i = s.length/2; i < s.length; i++){
        if (vowels.indexOf(s[i]) >= 0){
            b++;
        }
    }
    if (a === b){
        return true;
    }
    return false;
}