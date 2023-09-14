function numberOfArrays(differences, lower, upper){
    //initialize x
    let start = 0;
    //array to store range
    let arr = [0];
    for (let i = 0; i < differences.length; i++){
        start += differences[i];
        arr.push(start);
    }
    //find range
    let range = Math.max(...arr) - Math.min(...arr);
    //if there is only one element in differences; get the range
    if (differences.length === 1){
        range = Math.abs(differences[0]);
    }
    //find answer
    let ans = (upper - lower + 1) - range;
    //if answer is less than 0
    if (ans <= 0){
        return 0;
    }
    return ans;
}