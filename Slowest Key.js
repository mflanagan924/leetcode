function slowestKey(releaseTimes, keysPressed){
    let abcs = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let time = releaseTimes[0];
    let firstLetter = abcs.indexOf(keysPressed[0]);
    let ansArr = [[keysPressed[0], releaseTimes[0]]];
    for (let i = 1; i < keysPressed.length; i++){
        let difference = releaseTimes[i] - releaseTimes[i-1];
        if (difference >= time){
            let smallArr = [];
            firstLetter = keysPressed[i];
            time = difference;
            smallArr.push(firstLetter);
            smallArr.push(time);
            ansArr.push(smallArr);
        }
    }
    let letterArr = [];
    for (let i = 0; i < ansArr.length; i++){
        if (ansArr[i][1] === time){
            letterArr.push(ansArr[i][0]);
        }
    }
    letterArr.sort();
    return letterArr[letterArr.length-1];
}