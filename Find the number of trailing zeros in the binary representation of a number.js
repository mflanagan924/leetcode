function trailingZeros(n) {
    let bin = n.toString(2).split("").reverse();
    let ans = 0;
    for (let i = 0; i < bin.length; i++){
        if (bin[i] === "0"){
            ans++;
        } else {
            return ans;
        }
    }
  }