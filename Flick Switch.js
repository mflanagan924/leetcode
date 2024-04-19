function flickSwitch(arr){
    let check = true;
    let ans = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "flick"){
            check = !check;
        }
        ans.push(check);
    }
    return ans;
  }