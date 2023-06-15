function reverseWords(s){
    //split the string into array of words/spaces
    let arrSpace = s.split(" ");
    //empty array
    let arr = [];
    //for loop to remove the extra spaces
    for (let i = 0; i < arrSpace.length; i++){
        if (arrSpace[i].length > 0){
            arr.push(arrSpace[i]);
        }
    }
    //reverse array and join as sentence
    return arr.reverse().join(" ");
}