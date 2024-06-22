function strCount(str, letter){  
    let ans = 0;
    for(let i = 0; i<str.length; i++){
      if (str[i] === letter){
        ans++
      }
    }
    return ans;
  }