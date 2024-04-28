function remove (string) {  
    let newString = string.split("").reverse();
    let count = 0;
    for (let i = 0; i < newString.length; i++){
      if (newString[i] === "!"){
        count++;
      } else {
        break;
      }
    }
    let ans = "";
    let reverse = newString.reverse().join("");
    for (let i = 0; i < reverse.length - count; i++){
        ans += reverse[i];
    }
    return ans;
  }