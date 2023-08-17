function balancedStringSplit(s){
    //intialize balance
    let balance = 0;
    //intialize ans
    let ans = 0;
    //Whenever the balance variable reaches zero then we increase the answer by one.
    //Whenever the balance variable reaches zero then we increase the answer by one.
    for (let i = 0; i < s.length; i++){
        if(s[i] === "L"){
            balance += 1;
        } else {
            balance -= 1;
        }
        if (balance === 0){
            ans += 1;
        }
    }
    return ans;
}