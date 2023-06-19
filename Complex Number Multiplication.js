function complexNumberMultiply(num1, num2){
    //splits num1 into 3 parts for example 1+1i => [1, 1, i]
    let numOne = num1.split("+");
    numOne[1] = numOne[1].slice(0,-1);
    numOne.push("i");
    //splits num2 into 3 parts for example 1+1i => [1, 1, i]
    let numTwo = num2.split("+");
    numTwo[1] = numTwo[1].slice(0,-1);
    numTwo.push("i");
    //first step of the imaginary number mulitiplication
    let first = numOne[0]*numTwo[0];
    //second step of the imaginary number multiplication
    let second = numOne[0]*numTwo[1]+numOne[1]*numTwo[0] +"i";
    //third step of teh imaginary number multiplication
    let third = numOne[1]*numTwo[1] * -1;
    //first part of the final answer
    let firstPart = first + third;
    //return final answer
    return (firstPart + "+" + second);
}