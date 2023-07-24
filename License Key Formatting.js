function licenseKeyFormatting(s, k){
    //make array by splitting baseed on "-", joins as a single string, changes everything to uppercase, splits into seperate letters/numbers, reverses the order
    let arr = s.split("-").join("").toUpperCase().split("").reverse();
    //empty array to store the new split
    let arrSplit = [];
    //for loop to get slices of length k and reverse + join them
    for (let i = 0; i < arr.length; i+=k){
        arrSplit.push(arr.slice(i, i + k).reverse().join(""));
    }
    //reverse the total order and join with "-"
    return arrSplit.reverse().join("-");
}
