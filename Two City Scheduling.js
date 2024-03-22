function twoCitySchedCost(costs){
    for (let i = 0; i < costs.length; i++){
        costs[i].push(costs[i][0] - costs[i][1]);
    }
    costs.sort(function (a, b) {  return b[2] - a[2];  });
    let ans = 0;
    for (let i = 0; i < costs.length/2; i++){
        ans += costs[i][1];
    }
    for (let i = costs.length/2; i < costs.length; i++){
        ans += costs[i][0];
    }
    return ans;
}