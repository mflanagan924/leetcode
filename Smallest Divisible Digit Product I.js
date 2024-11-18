function smallestNumber(n, t){
    let arr = [n.toString()];
    for (i = 1; i < 10; i++){
        let num = n + i;
        arr.push(num.toString());
    }
    for (let i = 0; i < arr.length; i++){
        let product = 1;
        for (let j = 0; j < arr[i].length; j++){
            product *= +arr[i][j];
        }
        if (product%t === 0){
            return +arr[i];
        }
    }
}