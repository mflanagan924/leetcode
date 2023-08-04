function pickGifts(gifts, k){
    //sort gifts array in descending order
    gifts.sort(function (a, b) {  return b - a;  });
    //initialize the seconds
    let i = 0;
    //keep the always checking zero index in array
    let j = 0;
    //while loop to change the zero index to the floor of the square root and resort in descending order
    while (i < k){
        gifts[j] = Math.floor(Math.sqrt(gifts[j]));
        i += 1;
        gifts.sort(function (a, b) {  return b - a;  });
    }
    //get the sum of the array
    const sum = gifts.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
}