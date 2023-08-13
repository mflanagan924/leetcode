function isWinner(player1, player2){
    //initialize player1's score
    let player1Score = 0;
    //for loop to total player1's score
    for (let i = 0; i < player1.length; i++){
        console.log(player1Score)
        if (player1[i-1] === 10){
            player1Score += player1[i] * 2;
        } else if (player1[i-2] === 10){
            player1Score += player1[i] * 2;
        } else {
        player1Score += player1[i];
        }
    }
    //initialize player2's score
    let player2Score = 0;
    //for loop to total player2's score
    for (let i = 0; i < player2.length; i++){
        console.log(player2Score)
        if (player2[i-1] === 10){
            player2Score += player2[i] * 2;
        } else if (player2[i-2] === 10){
            player2Score += player2[i] * 2;
        } else {
        player2Score += player2[i];
        }
    }
    //Return 1 if the score of player 1 is more than the score of player 2,
    //2 if the score of player 2 is more than the score of player 1, and
    //0 in case of a draw.
    if (player1Score > player2Score){
        return 1;
    } else if (player1Score < player2Score){
        return 2;
    } else {
        return 0;
    }
}