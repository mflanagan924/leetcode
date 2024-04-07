function well(x){
    let count = 0;
  for (let i = 0; i < x.length; i++){
    if (x[i] === 'good'){
      count++;
    }
  }
  console.log(count)
  if (count > 2){
    return 'I smell a series!';
  } else if (count > 0){
    return 'Publish!';
  } else {
    return 'Fail!';
  }
  
}