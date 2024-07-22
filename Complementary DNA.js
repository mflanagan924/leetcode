function dnaStrand(dna){
    let ans = "";
    for (let i = 0; i < dna.length; i++){
      if (dna[i] === "A"){
        ans += "T";
      } else if (dna[i] === "T"){
        ans += "A";
      } else if (dna[i] === "C"){
        ans += "G";
      } else if (dna[i] === "G"){
        ans += "C";
      }
    }
    return ans;
  }