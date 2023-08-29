function uniqueMorseRepresentations(words){
    //morse code
    let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    //abcs
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    //empty array to store morse code of each word
    let arr = [];
    //for loop to find morse code of each word
    for (let i = 0; i < words.length; i++){
        let x = '';
        for (let j = 0; j < words[i].length; j++){
            x += morse[abc.indexOf(words[i][j])];
        }
        arr.push(x);
    }
    //find unique morse code words
    let unique = [... new Set(arr)];
    //return length
    return unique.length;
}