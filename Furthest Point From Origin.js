function furthestDistanceFromOrigin(moves){
    //split array
    let arr = moves.split("");
    //initialize count of L, R, and _
    let lCount = 0;
    let rCount = 0;
    let _Count = 0;
    //for loop to count L, R, and _
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === "L"){
            lCount += 1;
        } else if (arr[i] === "R"){
            rCount += 1;
        } else if (arr[i] === "_"){
            _Count += 1;
        }
    }
    //if L and R are equal return count of _
    if (lCount === rCount){
        return _Count;
    //if L > R
    } else if (lCount > rCount){
        return lCount - rCount + _Count;
    //if L < R
    } else if (lCount < rCount){
        return rCount - lCount + _Count;
    }
}