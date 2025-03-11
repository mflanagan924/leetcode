var capitals = function (word) {
	let ans = [];
  for (let i = 0; i < word.length; i++){
    let temp = word[i].toUpperCase();
    if (temp === word[i]){
      ans.push(i);
    }
    
  }
  return ans;
};