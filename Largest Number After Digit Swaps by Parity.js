function largestInteger(num){
    let string = num.toString().split("");
    
    let even = [];
    let evenIndex = [];
    let odd = [];
    let oddIndex = [];
    for (let i = 0; i < string.length; i++){
        let smallArr = [];
        if (+string[i]%2 === 0){
            even.push(string[i]);
            evenIndex.push(i);
        } else {
            odd.push(string[i]);
            oddIndex.push(i);
        }
    }
    even.sort(function (a, b) {  return b - a;  });
    odd.sort(function (a, b) {  return b - a;  });
    let evenArr = [];
    let oddArr = [];
    for (let i = 0; i < even.length; i++){
        let smallArr = [];
        smallArr.push(even[i]);
        smallArr.push(evenIndex[i]);
        evenArr.push(smallArr);
    }
    for (let i = 0; i < odd.length; i++){
        let smallArr = [];
        smallArr.push(odd[i]);
        smallArr.push(oddIndex[i]);
        oddArr.push(smallArr);
    }
    let combine = evenArr.concat(oddArr);
    console.log(combine)
    combine.sort(function (a, b) {  return a[1] - b[1];  });
    let ans = "";
    for (let i = 0; i < combine.length; i++){
        ans += combine[i][0];
    }
    return +ans;
}

largestInteger(247)