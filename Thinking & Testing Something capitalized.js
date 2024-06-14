function testit(s){
    if (s.length === 0){
      return "";
    }
    s = s.split(" ");
    for (let i = 0; i < s.length; i++){
        s[i] = s[i].split("");
        s[i][s[i].length - 1] = s[i][s[i].length - 1].toUpperCase();
        s[i] = s[i].join("");
    }
    return s.join(" ");
  }