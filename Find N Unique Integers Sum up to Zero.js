function sumZero(n){
    //initialize answer
    let ans = [];
    //checks when n is an even number
    if (n%2 === 0){
        //for loop to get n unique numbers that add up to zero
        for (let i = -n/2; i <= n/2; i++){
            ans.push(i);
        }
        //initialize final answer
        let finalAns = [];
        //for loop to take out the zero
        for (let j = 0; j < ans.length; j++){
            if (ans[j] !== 0){
                finalAns.push(ans[j]);
            }
        }
        return finalAns;
    }
    //checks when n is an odd number
    if (n%2 !== 0){
        //for loop to get n unique numbers that add up to zero
        for (let i = Math.round(-n/2); i < Math.round(n/2); i++){
            ans.push(i);
        }
        return ans;
    }
}