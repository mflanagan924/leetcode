function avgArray(arr) {
    let total = [];
    for (let i = 0; i < arr[0].length; i++){
        total.push(0);
    }
      for (let i = 0; i < arr[0].length; i++){
        for (let j = 0; j < arr.length; j++){
          total[i] += arr[j][i];
        }
      }
      let ans = [];
      for (let i = 0; i < total.length; i++){
        ans.push(total[i]/arr.length);
      }
      return ans;
    }