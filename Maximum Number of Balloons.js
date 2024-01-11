function maxNumberOfBalloons(text){
    // Create an empty object to store letter frequencies
  let frequencyMap = {};

  // Iterate through the string
  for (let i = 0; i < text.length; i++) {
    // If the character is a letter, convert it to lowercase
    if (/[a-z]/i.test(text[i])) {
      let letter = text[i].toLowerCase();

      // If the letter is not in the frequency map, initialize its count to 1
      if (!frequencyMap[letter]) {
        frequencyMap[letter] = 1;
      } else {
        // If the letter is already in the frequency map, increment its count
        frequencyMap[letter]++;
      }
    }
  }

  // Return the frequency map
  let check = [["b", 1], ["a", 1], ["l", 2], ["o", 2], ["n", 1]];
  let arr = [];
  for (let i = 0; i < check.length; i++){
      
      let freqOfLetter = frequencyMap[check[i][0]];
      if (freqOfLetter === undefined){
          freqOfLetter = 0;
      }
      let x = Math.floor(freqOfLetter/check[i][1]);
          arr.push(x);
  }
  return Math.min(...arr);
}