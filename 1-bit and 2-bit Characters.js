function isOneBitCharacter(bits){
    let oneCount = 0;
    if (bits[bits.length - 2] === 0){
        return true;
    } 
    
        for (let i = bits.length - 2; i >= 0; i--){
            if (bits[i] === 1){
                oneCount++;
            } else {
                break;
            }
        }
        if (oneCount%2 === 0){
            return true;
        }
        return false;
}

