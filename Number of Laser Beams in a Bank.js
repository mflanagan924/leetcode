function numberOfBeams(bank){
    let arr = [];
    for (let i = 0; i < bank.length; i++){
        let count = 0; 
        for (let j = 0; j < bank[i].length; j++){
            if (bank[i][j] === "1"){
                count++;
            }    
        }
        if (count > 0){
            arr.push(count);
        }
    }
    if (arr.length === 1){
        return 0;
    }
    let ans = 0;
    for (let i = 0; i < arr.length - 1; i++){
        ans += arr[i]*arr[i+1];
    }
    return ans;
}