/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let x = 2;
    while (x <= n){
        x *= 2;

    }
    return x - 1;
};