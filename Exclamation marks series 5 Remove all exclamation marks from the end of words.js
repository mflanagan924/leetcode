function remove (string) {
    //coding and coding....
    let arr = string.split("");
    let letter = false;
    let ans = "";
    for (let i = 0; i < arr.length; i++){
        if (arr[i] !== "!" && arr[i] !== " "){
            letter = true;
            ans += arr[i];
        } else if (arr[i] === " "){
            letter = false;
            ans += arr[i];
        } else if (letter === false && arr[i] === "!"){
            ans += arr[i];
        }
    }
    return ans;
  }