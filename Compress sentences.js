function compress(sentence) {
    let lowerArr = sentence.toLowerCase().split(" ");
    let unique = [... new Set(lowerArr)];
    let ans = "";
    for (let i = 0; i < lowerArr.length; i++){
        ans += unique.indexOf(lowerArr[i]);
    }
    return ans;
  }