function findWords(words){
    //store first row
    let firstRow = "qwertyuiopQWERTYUIOP";
    //store second row
    let secondRow = "asdfghjklASDFGHJKL";
    //store third row
    let thirdRow = "zxcvbnmZXCVBNM";
    //empty array to store unique letters
    let arr = [];
    //for loop to find unique letters of each word
    for (let i = 0; i < words.length; i++){
        let x = words[i].split("");
        let unique = [... new Set(x)];
        arr.push(unique)
    }
    //empty array to find which row each letter from unique letters belongs to
    let arr2 = [];
    for (let i = 0; i < arr.length; i++){
        let smallArr = [];
        for (let j = 0; j < arr[i].length; j++){
            if (firstRow.indexOf(arr[i][j]) >= 0){
                smallArr.push("1");
            } else if (secondRow.indexOf(arr[i][j]) >= 0){
                smallArr.push("2");
            } else if (thirdRow.indexOf(arr[i][j]) >= 0){
                smallArr.push("3");
            }
        }
        arr2.push(smallArr);
    }
    //empty array to join the numbers
    let arr3 = [];
    //for loop to join the unique numbers
    for (let i = 0; i < arr2.length; i++){
        let x = [... new Set(arr2[i])];
        arr3.push(x.join(""));
    }
    //empty array to store the index
    let index = [];
    //for loop to find the index words that have only letters from one row
    for (let i = 0; i < arr3.length; i++){
        if (arr3[i] === "1" || arr3[i] === "2" || arr3[i] === "3"){
            index.push(i);
        }
    }
    //empty array to store answer
    let ans = [];
    //for loop using index previously found to get the words
    for (let i = 0; i < index.length; i++){
        ans.push(words[index[i]]);
    }
    return ans;
}