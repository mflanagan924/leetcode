function grow(x){
    let ans=x[0];
    for(let i=1;i<x.length;i++){
      ans*=x[i]
    }
    return ans;
  }