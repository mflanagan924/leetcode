function calPoints(operations){
    //empty array to hold the score
    let record = [];
    //for loop to define each situation
    for (let i = 0; i < operations.length; i++){
        if (Number.isInteger(+operations[i]) === true){
            record.push(+operations[i]);
        } else if (operations[i] === "+"){
            record.push(record[record.length-1] + record[record.length-2]);
        } else if (operations[i] === "D"){
            record.push(record[record.length-1] * 2);
        } else if (operations[i] === "C"){
            record.pop();
        }
    }
    //initialize answer
    let answer = 0;
    //for loop to get the total of the record array
    for (let i = 0; i < record.length; i++){
        answer += record[i];
    }
    return answer;
}