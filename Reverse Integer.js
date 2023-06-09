function reverse(x){
    let stringArr = x.toString().split("");
    let minus = ""
    if (stringArr[0] === "-"){
        stringArr.shift();
        minus = "-"
    }
    let stringArrReverse = stringArr.reverse();
    stringArrReverse.unshift(minus);
    stringArrReverse.join();
    let ans = stringArrReverse.join("");
    let intAns = +ans;
    console.log(intAns)
    if (intAns > (2 ** 31) - 1 || intAns < -(2 ** 31)){
        return 0;
    } else {
        return intAns;
    }
}

console.log(reverse(123));

