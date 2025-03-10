function vowelIndices(word){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
    word = word.toLowerCase();
    console.log(word)
    let ans = [];
    for (let i = 0; i < word.length; i++){
      if (vowels.indexOf(word[i]) >= 0){
        ans.push(i+1);
      }
    }
    return ans;
  }