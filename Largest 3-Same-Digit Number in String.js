function largestGoodInteger(num){
    let arr = [];
    for (let i = 0; i < num.length; i++){
        let small = "";
        if (num[i + 1] === num[i] && num[i + 2] === num[i]){
            small += num[i];
            small += num[i + 1];
            small += num[i + 2];
            i += 2;
            arr.push(small);
        }
    }
    arr.sort(function (a, b) {  return b - a;  });
    if (arr.length === 0){
        return "";
    }
    return arr[0];
}