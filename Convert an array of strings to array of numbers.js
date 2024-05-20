function toNumberArray(stringarray){
    let ans = [];
    for (let i = 0; i < stringarray.length; i++){
        ans.push(+stringarray[i]);
    }
    return ans;
}