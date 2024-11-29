function billboard(name, price = 30){
    let length = name.length;
      let ans = 0;
      while (length > 0){
        ans += price;
        length--;
      }
      return ans;
    } 