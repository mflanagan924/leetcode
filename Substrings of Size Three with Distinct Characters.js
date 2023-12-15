function countGoodSubstrings(s){
    let arr = [];
    for (let i = 0; i < s.length-2; i++){
        let string = '';
        string += s[i];
        string += s[i+1];
        string += s[i+2];
        arr.push(string);
    }
    console.log(arr)
    function countUniqueCharacters(str) {
    // Create an object to store the frequency of each character
    let charFrequency = {};

    // Iterate through each character in the string
    for (let char of str) {
        // If the character is not in the frequency object, add it
        if (!charFrequency[char]) {
            charFrequency[char] = 1;
        } else {
            // If the character is already in the frequency object, increment its count
            charFrequency[char]++;
        }
    }

    // Count the number of unique characters (keys) in the frequency object
    let uniqueCount = Object.keys(charFrequency).length;

    return uniqueCount;
}
    let ans = 0;
    for (let i = 0; i < arr.length; i++){
        if (countUniqueCharacters(arr[i]) === 3){
            ans += 1;
        }
    }
    return ans;
}