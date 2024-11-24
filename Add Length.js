function addLength(str) {
    let ans = [];
      str = str.split(" ");
      for (let i = 0; i < str.length; i++){
        ans.push(str[i] + " " + str[i].length);
      }
      return ans;
    }