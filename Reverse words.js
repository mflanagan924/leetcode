function reverseWords(str) {
    let arr = str.split(" ");
    let ans =[];
    for (let i = 0; i < arr.length; i++){
      ans.push(arr[i].split("").reverse().join(""));
    }
    return ans.join(" ");
  }