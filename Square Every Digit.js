function squareDigits(num){
    let arr = num.toString().split("");
    let ans = "";
    for (let i = 0; i < arr.length; i++){
        arr[i] = (+arr[i] * +arr[i]).toString();
        ans += arr[i];
    }
    return +ans;
  }