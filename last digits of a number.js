function lastDigit(n, d) {
    let ans = [];
    if (d <= 0){
        return [];
    }
    let arr = n.toString().split("").reverse();
    if (d >= arr.length){
        arr = arr.reverse();
        for (let i = 0; i < arr.length; i++){
            ans.push(+arr[i]);
        }
        return ans;
    }
    for (let i = 0; i < d; i++){
        ans.push(+arr[i]);
    }
    return ans.reverse();
  
  }