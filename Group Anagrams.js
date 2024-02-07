function groupAnagrams(strs){
  let arr = [];
  let arrABC = [];
  for (let i = 0; i < strs.length; i++){
    let smallArr = [];
    smallArr.push(strs[i].split("").sort().join(""));
    smallArr.push(strs[i]);
    arr.push(smallArr);
    arrABC.push(strs[i].split("").sort().join(""))
  }
  arr.sort();
  arrABC.sort();
  let uniqueArrABC = [... new Set(arrABC)];
  let ans = [];
  for (let i = 0; i < uniqueArrABC.length; i++){
    let smallArr = [];
    for (let j = 0; j < arr.length; j++){
      if (uniqueArrABC[i] === arr[j][0]){
        smallArr.push(arr[j][1]);
    } 
  }
  ans.push(smallArr);
  }
  return ans;
}
