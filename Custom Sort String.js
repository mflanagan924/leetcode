function customSortString(order, s){
    let ans = [];
    let sArr = s.split("");
    for (let i = 0; i < order.length; i++){
        for (let j = 0; j < sArr.length; j++){
            if (order[i] === sArr[j]){
                ans.push(order[i]);
                sArr[j] = 1;
            }
        }
    }
    for (let i = 0; i < sArr.length; i++){
        if (sArr[i] != 1){
            ans.push(sArr[i]);
        }
    }
    return ans.join("");
}