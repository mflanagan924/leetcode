function capitalize(s,arr){
    s = s.split("");
    for (let i = 0; i < arr.length; i++){
        if (s.length - 1 >= arr[i]){
            s[arr[i]] = s[arr[i]].toUpperCase();
        }
    }
    return s.join("");
  }