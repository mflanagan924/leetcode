function accountBalanceAfterPurchase(purchaseAmount){
    //rounded amount is floor((purchaseAmount + 5) / 10) * 10
    let roundedAmount = Math.floor((purchaseAmount + 5) / 10) * 10;
    //return 100 - roundedAmount
    return 100 - roundedAmount;
}