function sortVowels(s) {
    //empty array to store vowels in s
    let vowelsArr = [];
    //array to store all vowels as a comparison
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    //for loop to find vowels in s and also return their ASCII value
    for (let i = 0; i < s.length; i++){
        let smallArr = [];
        if (vowels.indexOf(s[i]) >= 0){
            smallArr.push(s[i]);
            smallArr.push(s[i].charCodeAt(0));
            vowelsArr.push(smallArr);
        }
    }
    //sort array in ascending order by ASCII values
    vowelsArr.sort(function(a, b) {
  return a[1] - b[1];
});
    //initialize step
    let x = 0;
    //split the string into array of letters
    let arr = s.split("");
    //for loop to check if letter in array is a vowel if so replace it with letter from vowelsArr
    for (let i = 0; i < s.length; i++){
        if (vowels.indexOf(arr[i]) >= 0){
            arr[i] = vowelsArr[x][0];
            x++;
        }
    }
    //return string
    return arr.join("");
}