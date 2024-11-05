/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let even = 0;
    let odd = 0;
    for (let i = 0; i < num.length; i++){
        if (i%2 === 0){
            even += +num[i];
        } else {
            odd += +num[i];
        }
    }
    if (even === odd){
        return true;
    } else {
        return false;
    }
};