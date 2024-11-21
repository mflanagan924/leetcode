Array.prototype.remove_ = function(integer_list, values_list){
    let ans = [];
    for (let i = 0; i < integer_list.length; i++){
      if (!values_list.includes(integer_list[i])){
        ans.push(integer_list[i]);
      }
    }
    return ans;
  }