var number=function(array){
    let ans = [];
    for (let i = 0; i < array.length; i++){
      let string = "";
      string += (i+1).toString() + ":" + " " + array[i];
      ans.push(string);
    }
    return ans;
  }