function high(x){
    let arr = x.split(" ");
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let score = [];
    for (let i = 0; i < arr.length; i++){
        let wordScore = 0;
        for (let j = 0; j < arr[i].length; j++){
            let index = abc.indexOf(arr[i][j]);
            wordScore += index + 1;
        }
        score.push(wordScore);
    }
    return arr[score.indexOf(Math.max(...score))]
}