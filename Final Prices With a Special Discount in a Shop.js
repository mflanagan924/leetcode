function finalPrices(prices){
    //empty array to store answer
    let ans = [];
    //for loop to check if prices[j] <= prices[i] if so push it into answer and break loop
    for (let i = 0; i < prices.length; i++){
        for (let j = i + 1; j < prices.length; j++){
            if (prices[j] <= prices[i]){
                ans.push(prices[i] - prices[j]);
                break;
            }
            //if you get to the end of the loop and there was no answer that satisfied prices[j] <= prices[i] then push prices[i]
            if (j === prices.length - 1){
                ans.push(prices[i]);
            }
        }      
    }
    //the last price will always be pushed into final answer as no price is after (ie no price after is lower)
    ans.push(prices[prices.length - 1]);
    return ans;
}