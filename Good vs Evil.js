function goodVsEvil(good, evil){
    let goodScore = 0;
    let goodArr = good.split(" ");
    let goodWorth = [1, 2, 3, 3, 4, 10];
    for (let i = 0; i < goodArr.length; i++){
        goodScore += +goodArr[i] * goodWorth[i];
    }
    let evilScore = 0;
    let evilArr = evil.split(" ");
    let evilWorth = [1, 2, 2, 2, 3, 5, 10];
    for (let i = 0; i < evilArr.length; i++){
        evilScore += +evilArr[i] * evilWorth[i];
    }
    if (goodScore > evilScore){
        return "Battle Result: Good triumphs over Evil";
    } else if (goodScore < evilScore){
        return "Battle Result: Evil eradicates all trace of Good";
    } else {
        return "Battle Result: No victor on this battle field";
    }
    
}