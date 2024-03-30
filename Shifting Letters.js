function shiftingLetters(s, shifts){

    for (let i = shifts.length - 2; i >= 0; i--){
        shifts[i] = shifts[i] + shifts[i + 1];
    }
    let ans = "";
    for (let i = 0; i < s.length; i++){
        ans += String.fromCharCode((s[i].charCodeAt(0) - 97 + shifts[i]) % 26+97);
}
return ans;
}

