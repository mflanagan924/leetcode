const reverseSeq = n => {
    let ans = []
    while(n > 0){
      ans.push(n)
      n--
    }
    return ans
  };