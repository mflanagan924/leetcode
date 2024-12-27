function validateHello(greetings) {
    greetings = greetings.toLowerCase();
    let arr = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"];
    for (let i = 0; i < arr.length; i++){
      if (greetings.indexOf(arr[i]) >= 0){
        return true;
      } 
    }
    return false;
  }