function fib(n){
    //initialize Fibonacci numbers
    let arr = [0,1];
    //when n = 0
    if (n === 0){
        return 0;
    }
    //when n = 1
    if (n === 1){
        return 1;
    }
    //for n > 1 add the previous two numers to get the next Fibonacci number
    for (let i = 2; i <= n; i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    //return the last number which is F(n)
    return arr[arr.length - 1];
}