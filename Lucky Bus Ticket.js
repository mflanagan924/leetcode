function isLucky(ticket) {
    if (ticket.length !== 6){
      return false;
    }
    if (isNaN(ticket)){
      return false;
    }
    let first = 0;
    let second = 0;
    for (let i = 0; i < 3; i++){
        first += +ticket[i];
    }
    for (let i = 3; i < ticket.length; i++){
        second += +ticket[i];
    }
    if (first === second){
        return true;
    }
    return false;
    }