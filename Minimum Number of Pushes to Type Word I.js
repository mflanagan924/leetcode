function minimumPushes(word){
    let arr = word.split("");
    console.log(arr.length)
    let count = 0;
    let length = arr.length;
    while (length > 8){
        count++;
        length -= 8;
    }
    if (count === 1){
        return 8 + length*2;
    } else if (count === 2){
        return 24 + length*3;
    } else if (count === 0){
        return length;
    } else if (count === 3){
        return 48 + length*4;
    }
}

