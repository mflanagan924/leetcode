function encode(str) {
    let string = str.toLowerCase();
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let ans = "";
    for (let i = 0; i < string.length; i++){
        if (abc.indexOf(string[i]) >= 0){
            let num = abc.indexOf(string[i]) + 1;
            ans += num.toString();
        } else {
            ans += string[i];
        }
    }
    return ans;
   }