function interlockable(a, b) {
    let aBin = a.toString(2).split("").reverse().join("");
    let bBin = b.toString(2).split("").reverse().join("");
    let length = 0;
    if (aBin.length <= bBin.length){
        length = aBin.length;
    } else {
        length = bBin.length;
    }
    for (let i = 0; i < length; i++){
        if (aBin[i] === "1" && bBin[i] === "1"){
            return false;
        }
    }
    return true;
  }