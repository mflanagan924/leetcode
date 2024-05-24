function encode(str) {
    let ans = "";
    let decoder = ["G", "g", "A", "a", "D", "d", "E", "e", "R", "r", "Y", "y", "P", "p", "O", "o", "L", "l", "U", "u", "K", "k", "I", "i"];
    let encoder = ["A", "a", "G", "g", "E", "e", "D", "d", "Y", "y", "R", "r", "O", "o", "P", "p", "U", "u", "L", "l", "I", "i", "K", "k"];
    for (let i = 0; i < str.length; i++){
        if (decoder.indexOf(str[i]) >= 0){
            let index = decoder.indexOf(str[i]);
            ans += encoder[index];
        } else {
            ans += str[i];
        }
    }
    return ans;
}

function decode(str) {
    let ans = "";
    let decoder = ["G", "g", "A", "a", "D", "d", "E", "e", "R", "r", "Y", "y", "P", "p", "O", "o", "L", "l", "U", "u", "K", "k", "I", "i"];
    let encoder = ["A", "a", "G", "g", "E", "e", "D", "d", "Y", "y", "R", "r", "O", "o", "P", "p", "U", "u", "L", "l", "I", "i", "K", "k"];
    for (let i = 0; i < str.length; i++){
        if (decoder.indexOf(str[i]) >= 0){
            let index = decoder.indexOf(str[i]);
            ans += encoder[index];
        } else {
            ans += str[i];
        }
    }
    return ans;
}
