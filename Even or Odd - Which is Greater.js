function evenOrOdd(str) {
    let arr = str.split("");
    console.log(arr)
    let even = 0;
    let odd = 0;
    for (let i = 0; i < arr.length; i++){
        if (+arr[i]%2 === 0){
            even += +arr[i];
        } else {
            odd += +arr[i];
        }
    }
    console.log(even)
    console.log(odd)
    if (even > odd){
        return "Even is greater than Odd";
    } else if (even < odd){
        return "Odd is greater than Even";
    } else {
        return "Even and Odd are the same";
    }
    }