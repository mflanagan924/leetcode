function openOrSenior(data){
    let ans = [];
    
    for ( let i = 0; i < data.length; i ++ ) {
      if ( data[i][0] >= 55 && data[i][1] > 7 ) {
        ans.push('Senior') 
      } else {
        ans.push('Open') 
      }
    }
      return ans
  }