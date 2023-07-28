function buyChoco(prices, money){
    //sort prices in ascending order
    prices.sort(function(a, b) {
  return a - b;
});
    //checks if the lowest 2 prices are less than or equal to money, if so return money minus the lowest two prices, otherwise return the money
    if (prices[0] + prices[1] <= money){
        return money - prices[0] - prices[1];
    }
    return money
}