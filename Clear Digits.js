function clearDigits(s){
    let arr = s.split("")
    for (let i = 0; i < arr.length; i++){
        if (isNaN(arr[i]) === false){
            for (let j = i-1; j >= 0; j--){
                if (arr[j] !== "#"){
                    if (isNaN(arr[j]) === true){
                        arr[j] = "#";
                        break;
                    }
                }
            }
        }
    }
    let ans = "";
    for (let i = 0; i < arr.length; i++){
        if (isNaN(arr[i]) === true && arr[i] !== "#"){
            ans += arr[i];
        }
    }
    return ans;
}