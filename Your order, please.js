function order(words){
    words = words.split(" ");
    let ans = [];
    for (let i = 1; i <= words.length; i++){
        let string = i.toString();
        for (let i = 0; i < words.length; i++){
            if (words[i].indexOf(string) >= 0){
                ans.push(words[i]);
            }
        }
    }
    return ans.join(" ");
  }