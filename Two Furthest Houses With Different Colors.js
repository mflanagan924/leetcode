function maxDistance(colors){
    //empty array to store distance between two different colors
    let arr = [];
    //for loop to get the distance between two different color houses
    for (let i = 0; i < colors.length-1; i++){
        for (let j = i + 1; j < colors.length; j++){
            if (colors[i] !== colors[j]){
                arr.push(j-i);
            } 
        }
    }
    //return the max distance
    return Math.max(...arr);
}