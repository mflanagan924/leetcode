function getEncryptedString(s, k){
    let n = s.length;
    let ans = "";
    for (let i = 0; i < s.length; i++){
        let x = (i + k)%n;
        ans += s[x];
    }
    return ans;
}