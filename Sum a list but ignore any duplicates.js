function sumNoDuplicates(numList) {
    for (let i = 0; i < numList.length-1; i++){
        let compare = numList[i]
        for (let j = i + 1; j < numList.length; j++){
            if (compare === numList[j]){
                numList[i] = "x";
                numList[j] = "x";
            }
        }
    }
    let sum = 0;
    for (let i = 0; i < numList.length; i++){
        if (numList[i] !== "x"){
            sum += numList[i];
        }
    }
    return sum;
  }