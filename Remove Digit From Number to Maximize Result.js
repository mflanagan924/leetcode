function removeDigit(number, digit){
    let arr = [];
    for (let i = 0; i < number.length; i++){
        if (number[i] === digit){
            let stringWithoutCharacter = number.slice(0, i) + number.slice(i + 1);
            arr.push(stringWithoutCharacter);
        }
    }
    arr.sort();
    return arr[arr.length-1];
}
