function canSnailReachEnd(length, speed, lengthIncreases) {
    if (speed < lengthIncreases){
        return false;
    }
    let totalDistance = (60*24*365*lengthIncreases)+length;
    let time = totalDistance/(60*24*365*speed);
    if (time <= 1){
        return true;
    } else {
        return false;
    }
}