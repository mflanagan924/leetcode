function mostLikely(prob1,prob2){
    let first = prob1.split(":");
    let firstProb = (+first[0])/(+first[1]);
    let second = prob2.split(":");
    let secondProb = (+second[0])/(+second[1]);
    if (firstProb > secondProb){
        return true;
    }
    return false;
  }