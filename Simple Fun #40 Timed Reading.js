function timedReading(maxLength, text) {
    text = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'?']/g,"");
    if (text === ""){
      return 0;
    }
    let arr = text.split(" ");
    let ans = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i].length <= maxLength){
        ans++;
      }
    }
    return ans;
    
  }