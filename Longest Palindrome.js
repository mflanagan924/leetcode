function longestPalindrome(s){
    let arr = s.split("");
    var uniqueArray = Array.from(new Set(arr));
    let arr2 = [];
    for (let i = 0; i < uniqueArray.length; i++){
        let count = 0;
        let smallArr = [];
        for (let j = 0; j < arr.length; j++){
            if (arr[j] === uniqueArray[i]){
                count++;
            }
        }
        smallArr.push(uniqueArray[i]);
        smallArr.push(count);
        arr2.push(smallArr);
    }
    let single = false;
    let ans = 0;
    if (arr2.length === 1){
        return arr2[0][1];
    }
    for (let i = 0; i < arr2.length; i++){
        if (arr2[i][1] === 1 && single === false){
            single = true;
            ans += arr2[i][1];
        } else if (arr2[i][1]%2 === 0){
            ans += arr2[i][1];
        } else if (arr2[i][1]%2 > 0 && arr2[i][1] !== 1 && single === false){
            single = true;
            ans += arr2[i][1];
            }
        else if (arr2[i][1]%2 > 0 && arr2[i][1] !== 1){
            ans += arr2[i][1] - 1;
        }
    }
    return ans;
}