function constructRectangle(area){
    //find the square root of area rounded down to the nearest whole number. This is the starting point for finding W
    let squareRoundDown = Math.floor(Math.sqrt(area));
    //intiialize L
    let L = 0;
    //initialize W
    let W = squareRoundDown;
    //for loop to find L and W, stop it when it finds the smallest difference between L and W
    for (let i = W; i > 0; i--){
        if (area%i === 0){
            W = i;
            L = area/i;
            break;
        }
    }
    return [L, W];
}