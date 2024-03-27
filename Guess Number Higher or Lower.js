/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let start = 1;
    let end = n;
    while (start <= end){
        let num = Math.ceil((start + end)/2)
        let check = guess(num);
        if (check === 0){
            return num;
        } else if (check === -1){
            end = num - 1;
        } else if (check === 1){
            start = num + 1;
        }
    }
    
};