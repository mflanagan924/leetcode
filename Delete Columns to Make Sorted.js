function minDeletionSize(strs){
    let arr = [];
    let count = 0;
    while (count < strs[0].length){
            let smallArr = [];
            for (let i = 0; i < strs.length; i++){
                if (i <= strs.length-1 && count <= strs[0].length){
            smallArr.push(strs[i][count]);
            }
            
        }
        arr.push(smallArr.join(""));
        count++;
    }
    let ans = 0;
    for (let i = 0; i < arr.length; i++){
        let temp = arr[i].split("").sort().join("");
        if (arr[i] !== temp){
            ans++;
        }
    }
    return ans;
}
