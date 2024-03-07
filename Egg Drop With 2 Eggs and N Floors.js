/**
 * @param {number} n
 * @return {number}
 */
var twoEggDrop = function(n) {
    let i = 1;
    while ((i*(i+1))/2<n){
        i++;
    }
    return i;
};