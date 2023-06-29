function fizzBuzz(n){
    //empty array to store answer
    let answer = [];
    //for loop to populate array according to given conditions
    for (let i = 1; i <= n; i++){
        //answer[i] == "FizzBuzz" if i is divisible by 3 and 5
        if (i%3 === 0 && i%5 === 0){
            answer.push("FizzBuzz");
        //answer[i] == "Fizz" if i is divisible by 3
        } else if (i%3 === 0){
            answer.push("Fizz");
        //answer[i] == "Buzz" if i is divisible by 5
        } else if (i%5 === 0){
            answer.push("Buzz");
        //answer[i] == i (as a string) if none of the above conditions are true
        } else {
            answer.push(i.toString());
        }
    }
    return answer;
}