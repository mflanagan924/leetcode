function DNAtoRNA(dna) {
    let ans = "";
    for (let i = 0; i < dna.length; i++) {
      if (dna[i] === "T") {
        ans += "U";
      } else {
        ans += dna[i];
      }
    }
    return ans;
  }