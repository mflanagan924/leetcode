function password(str) {
    if (str.length < 8){
      return false;
    }
    let upperCount = 0;
    let lowerCount = 0;
    let numCount = 0;
  for (let i = 0; i < str.length; i++){
    if (/[A-Z]/.test(str[i])) {
      upperCount++;
    }
    if (/[a-z]/.test(str[i])) {
      lowerCount++;
    }
    if (/[0-9]/.test(str[i])) {
      numCount++;
    }
  }
  if (lowerCount < 1){
    return false;
  }
  if ( upperCount < 1){
    return false;
  }
  if (numCount < 1){
    return false;
  }
  return true;
}