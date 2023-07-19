function totalMoney(n) {
    //find number of weeks rounded up
    let weeks = Math.ceil(n/7);
    //intialize answer
    let start = 0;
    //initialize the moving end
    let x = 0;
    //for loop to go through each week
    for (let i = 1; i <= weeks; i++){
        //bump up the end of each week
        x += 1;
        //for loop to add each subsequent day
        for (let j = i; j < 7+x; j++){
            if (n > 0){
                start += j;
                n -= 1;
            }
        }
    }
    return start;
}