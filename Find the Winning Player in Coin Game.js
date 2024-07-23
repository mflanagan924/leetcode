function losingPlayer(x, y){
    let min = Math.floor(Math.min(x, y/4));
    if (min%2 === 0){
        return "Bob";
    } else {
        return "Alice";
    }
}