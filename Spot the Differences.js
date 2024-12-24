function spot(s1,s2){
    let ans = [];
    for (let i = 0; i < s1.length; i++){
      if (s1[i] !== s2[i]){
        ans.push(i);
      }
    }
    return ans;
  }