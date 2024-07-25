function minChanges(n, k){
    let nBin = n.toString(2);
    let kBin = k.toString(2);
    // Determine the length of the longest binary string
  let maxLength = Math.max(nBin.length, kBin.length);
  // Add leading zeros to both binary strings to match the maxLength
  nBin = nBin.padStart(maxLength, '0');
  kBin = kBin.padStart(maxLength, '0');
  nBin = nBin.split("");
  kBin = kBin.split("");
    let ans = 0;
    for (let i = 0;i < nBin.length; i++){
        if (nBin[i] === "1" && kBin[i] === "0"){
            nBin[i] = "0";
            ans++;
        }
    }
    nBin = nBin.join("");
    kBin = kBin.join("");
    if (nBin === kBin){
        return ans;
    } else {
        return -1;
    }
}