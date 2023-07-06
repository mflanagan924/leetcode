function minimumCost(cost){
    //when there is only one item in cost array
    if (cost.length === 1){
        return cost[0]
    }
    //sort the cost array in descending order
    cost.sort(function(a,b){return b-a});
    //initialize array to store costs
    let arr = [];
    //for loop to add cost[i] and cost[i+1] (skips cost[i+2])
    for (let i = 0; i < cost.length; i+=3){
        arr.push(cost[i]);
        arr.push(cost[i+1]);
    }
    //initialize answer
    let ans = 0;
    //for loop to add all items that aren't null
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === +arr[i]){
            ans += arr[i];
        }
    }
    return ans;
}