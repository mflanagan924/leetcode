function validName(array){
    if (array.length === 1){
      return "Congratulations, you can choose any name you like!";
    }
      if (array.length === 0){
        return "You must test at least one name.";
      }
      for (let i = 1; i < array.length; i++){
        if (array[i][0].toLowerCase() !== array[i-1][array[i-1].length - 1]){
          return "Back to the drawing board, your baby names are not compatible.";
        }
      }
      return "Congratulations, your baby names are compatible!";
    } 