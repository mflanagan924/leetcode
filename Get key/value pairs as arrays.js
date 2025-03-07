function keysAndValues(data){
    //static method returns an array of a given object's own enumerable string-keyed property key-value pairs
    let arr = Object.entries(data);
    //initiate final answer
    let ans = [[], []];
    //for loop that pushes first part of pair into first part and second part of pair into second part
    for (let i = 0; i < arr.length; i++){
      ans[0].push(arr[i][0]);
      ans[1].push(arr[i][1]);
    }
    return ans;
  }