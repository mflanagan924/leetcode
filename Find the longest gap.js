function gap(num) {
    let binary = num.toString(2);
    let gap = 0;
    let count = 0;
    for (let i = 0; i < binary.length; i++){
        if (binary[i] === '0'){
            count++;
        } else if (binary[i] === '1'){
            if (count > gap){
                gap = count;
                count = 0;
            }
            count = 0;
        }
    }
    return gap;
}