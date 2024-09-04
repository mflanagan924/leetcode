function checkTwoChessboards(coordinate1, coordinate2){
    let abc = ["a", "b", "c", "d", "e", "f", "g", "h"];
    let firstLetter = abc.indexOf(coordinate1[0]) + 1;
    let firstValue = firstLetter + (+coordinate1[1]);
    let firstEven = true;
    if (firstValue%2 > 0){
        firstEven = false;
    }
    let secondLetter = abc.indexOf(coordinate2[0]) + 1;
    let secondValue = secondLetter + (+coordinate2[1]);
    let secondEven = true;
    if (secondValue%2 > 0){
        secondEven = false;
    }
    if (firstEven === secondEven){
        return true;
    } else {
        return false;
    }
}