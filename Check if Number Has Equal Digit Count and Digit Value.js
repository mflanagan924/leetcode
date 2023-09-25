function digitCount(num){
    //split num into array of string integers
    let arr = num.split("");
    //find unique integers
    let arrUnique = [... new Set(arr)];
    //empty array to store frequency
    let freq = [];
    //for loop to initially populate with zeros
    for (let i = 0; i < num.length; i++){
        freq.push("0");
    }
    //for loop to update the freq array with actually frequency of numbers where the digit i occurs num[i]
    for (let i = 0; i < arrUnique.length; i++){
        let length = 0;
        for (let j = 0; j < num.length; j++){
            if (arrUnique[i] === num[j]){
                length += 1;
            }
        }
        freq[+arrUnique[i]] = length.toString();
    }
    //for loop to compare freq array with the num string
    for (let i = 0; i < freq.length; i++){
        if (freq[i] !== num[i]){
            return false;
        }
    }
    return true;
}