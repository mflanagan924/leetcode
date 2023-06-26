function canPlaceFlowers(flowerbed, n){
    //when only one spot and one flower
    if (flowerbed.length === 1 && flowerbed[0] === 0 && n === 1){
        return true;
    }
    //edge case when there are two zeros at the beginning
    if (flowerbed[0] === 0 && flowerbed[1] === 0 && n > 0){
        flowerbed[0] = 1;
        n -= 1;
    }
    //edge case when there are two zeros at the end
    if (flowerbed[flowerbed.length - 1] === 0 && flowerbed[flowerbed.length - 2] === 0 && n > 0){
        flowerbed[flowerbed.length - 1] = 1;
        n -= 1;
    }
    //for loop to check if the current index is zero and if the indexes before and after are zero
    for (let i = 1; i < flowerbed.length - 1; i++){
        if (flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0 && n > 0){
            flowerbed[i] = 1;
            n -= 1;
        }
    }
    //checks to make sure all flowers were planted
    if (n === 0){
        return true;
    }
    return false;
}