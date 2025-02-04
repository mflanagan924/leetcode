function isDivisible(n, ...args){
    return args.every(num => n % num === 0);
  }