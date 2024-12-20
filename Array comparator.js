function matchArrays(v,r){
    let count = 0;
      for (let i = 0; i < v.length; i++){
        if (r.indexOf(v[i]) >= 0){
          count++;
        }
      }
      return count;
    }