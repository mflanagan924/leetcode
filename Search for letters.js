function change(string){
    string = string.toLowerCase();
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let ans = '00000000000000000000000000';
    ans = ans.split("");
    for (let i = 0; i < string.length; i++){
      if (abc.indexOf(string[i]) >= 0){
        ans[abc.indexOf(string[i])] = '1';
      }
    }
    return ans.join("");
  }