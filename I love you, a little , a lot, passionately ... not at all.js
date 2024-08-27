function howMuchILoveYou(nbPetals) {
    let arr = ["I love you", "a little", "a lot", "passionately", "madly", "not at all"];
    let x = nbPetals%6;
    if (x === 0){
        return arr[5];
    } else {
        return arr[(nbPetals%6) - 1];
    }
}