function checkDistances(s, distance){
    //find unique letters
    let unique = [...new Set(s.split(""))];
    //emtpy array to store letter and their index appearances in s
    let arr = [];
    //find the index appearances of each unique letter in s
    for (let i = 0; i < unique.length; i++){
        let smallArr = [];
        smallArr.push(unique[i]);
        for (let j = 0; j < s.length; j++){
            if (unique[i] === s[j]){
                smallArr.push(j);
            }
        }
        arr.push(smallArr);
    }
    //empty array to store letter and letters inbetween each unique letter
    let arr2 = [];
    //for loop to find the distance between each unique letter
    for (let i = 0; i < arr.length; i++){
        let smallArr = [];
        smallArr.push(arr[i][0]);
        smallArr.push(arr[i][2] - arr[i][1] - 1);
        arr2.push(smallArr);
    }
    //object to store index of the abc's
    const abc = {
        'a' : 0,
        'b' : 1,
        'c' : 2,
        'd' : 3,
        'e' : 4,
        'f' : 5,
        'g' : 6,
        'h' : 7,
        'i' : 8,
        'j' : 9,
        'k' : 10,
        'l' : 11,
        'm' : 12,
        'n' : 13,
        'o' : 14,
        'p' : 15,
        'q' : 16,
        'r' : 17,
        's' : 18,
        't' : 19,
        'u' : 20,
        'v' : 21,
        'w' : 22,
        'x' : 23,
        'y' : 24,
        'z' : 25
    }
    //for loop to check that the string is well spaced ie. the number of letters between the two occurrences of the ith letter is distance[i]
    for (let i = 0; i < arr2.length; i++){
        let indexLetter = arr2[i][0];
        let index = abc[indexLetter];
        if (distance[index] !== arr2[i][1]){
            return false;
        }
    }
    return true;
}