function reformatNumber(number){
    let newString = number.replace(/-|\s/g,"");
    let ans = "";
    while (newString.length > 4){
        ans += newString.substring(0,3) + "-";
        newString = newString.slice(3);
    }
    if (newString.length === 4){
        ans += newString.substring(0, 2) + "-" + newString.substring(2, 4);
    } else if (newString.length === 3){
        ans += newString;
    } else if (newString.length === 2){
        ans += newString;
    }
    return ans;
}