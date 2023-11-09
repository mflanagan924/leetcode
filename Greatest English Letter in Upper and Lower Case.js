function greatestLetter(s){
    let arr = s.split("");
    console.log(arr)
    let unique = [...new Set(arr)];
    console.log(unique)
    var reversedArray = unique.sort(function(a, b) {
    return b.toLowerCase().localeCompare(a.toLowerCase());
  });
    console.log(reversedArray)
    for (let i = 0; i < reversedArray.length-1; i++){
        if (reversedArray[i] === reversedArray[i+1].toUpperCase() || reversedArray[i] === reversedArray[i+1].toLowerCase()){
            return reversedArray[i].toUpperCase();
        }
    }
    return "";
}