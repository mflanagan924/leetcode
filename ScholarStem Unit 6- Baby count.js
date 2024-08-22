function countName(anArr, name){
    let ans = 0;
      for (let i = 0; i < anArr.length; i++){
        if (anArr[i] === name){
          ans++;
        }
      }
      return ans;
    
    };