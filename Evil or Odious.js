function evil(n) {
    let bin = n.toString(2);
  console.log(bin)
  let count = 0;
  for (let i = 0; i < bin.length; i++){
    if (bin[i] === "1"){
      count++;
    }
  }
  if (count%2 === 0){
    return "It's Evil!";
  }
  return "It's Odious!";
}