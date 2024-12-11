function covfefe(str){
    if (str.indexOf("coverage") < 0){
      str += " covfefe";
      return str;
    }
    str = str.split(" ");
    for (let i = 0; i < str.length; i++){
      if (str[i] === "coverage"){
        str[i] = "covfefe";
      }
    }
    return str.join(" ");
  }