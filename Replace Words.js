function replaceWords(dictionary, sentence){
    let arr = sentence.split(" ");
    dictionary.sort(function (a, b) {  return a.length - b.length;  });
    for (let i = 0; i < dictionary.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (arr[j].indexOf(dictionary[i]) === 0){
                arr[j] = dictionary[i];
            }
        }
    }
    return arr.join(" ");
}