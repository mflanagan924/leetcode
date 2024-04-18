function possiblyPerfect(key,answers) {
    let correctCount = 0;
    let incorrectCount = 0;
    let undefinedCount = 0;
      for (let i = 0; i < key.length; i++){
        if (key[i] === "_"){
            undefinedCount++;
        } else if (key[i] === answers[i]){
            correctCount++;
        } else if (key[i] !== answers[i]){
            incorrectCount++;
        }
    }
    
      if (correctCount + undefinedCount === key.length){
          return true;
      }
        if (incorrectCount + undefinedCount === key.length){
            return true;
        }
        return false;
    }
    
    