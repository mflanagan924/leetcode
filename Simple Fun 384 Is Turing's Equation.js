function isTuringEquation(s){
    s = s.split(/[+=]+/);
    let arr = [];
    for (let i = 0; i < s.length; i++){
        arr.push(+s[i].split("").reverse().join(""));
    }
    if (arr[0] + arr[1] == arr[2]){
        return true;
    } else {
      return false;
    }
  
  }