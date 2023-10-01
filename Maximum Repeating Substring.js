function maxRepeating(sequence, word){
    //initialize answer
    let ans = 0;
    //while loop include checks returns true if whatever inside it is in the string
    //repeat makes a string repeated X number of times
    //therefore, the while loop will repeat as long as the repeated string is shown, if shown, will increase the repeat of the string until it doesn't appear anymore
    while (sequence.includes(word.repeat(ans + 1))){
        ans += 1;
    }
    return ans;
}