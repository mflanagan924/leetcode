function minOperations(boxes){
    //empty array to store final answer
    let answer = [];
    //double for loop to iterate on each ball in a box j, and add abs(i-j) to answers[i].
    for (let i = 0; i < boxes.length; i++){
        //initialize the num that goes into answer array
        let num = 0;
        for (let j = 0; j < boxes.length; j++){
            //only move if there is a ball in the box (ie boxes[j] === "1")
            if (boxes[j] === "1"){
                num += Math.abs(i-j);
            }
        }
        answer.push(num);
    }
    return answer
}