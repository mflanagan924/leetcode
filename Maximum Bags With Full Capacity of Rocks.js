function maximumBags(capacity, rocks, additionalRocks){
    //empty array to store how much space is in each bag
    let space = [];
    //for loop to figure out how much space is available in each bag
    for (let i = 0; i < capacity.length; i++){
        space.push(capacity[i] - rocks[i]);
    }
    //sorts in ascending order the amout of space available in each back before filling with additionalRocks
    space.sort(function(a, b) {
  return a - b;
});
    //for loop to fill the bags with the addtional rocks
    for (let i = 0; i < space.length; i++){
        //if the bag is already full (ie 0 space) then do nothing
        if (space[i] === 0){
            space[i] = 0;
        //if the space in the bag is less than addtional rocks than subtract space from addtional rocks
        } else if (space[i] < additionalRocks){
            additionalRocks = additionalRocks - space[i];
            space[i] = 0;
        //if the space in the bag is more than or equal to the additional rocks subtract the additional rocks from the space and make the additional rocks 0
        } else if (space[i] >= additionalRocks){
            space[i] = space[i] - additionalRocks;
            additionalRocks = 0;
        }
    }
    //initialize answer
    let ans = 0;
    //for loop to find all bags that have zero space (ie. completely full)
    for (let i = 0; i < space.length; i++){
        if (space[i] === 0){
            ans += 1;
        }
    }
    return ans;
}