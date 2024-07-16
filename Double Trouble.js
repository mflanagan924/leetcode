function trouble(x, t){
    let arr = [];
    for (let i = 0; i < x.length; i++){
        if (x[i] + x[i-1] === t){
            x.splice(i, 1);
            i = 0;
        } 
        
    }
    return x;
}