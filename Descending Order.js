function descendingOrder(n){
    n = n.toString().split("")
    n = n.sort(function(a, b) {
      return b - a;
    });
     n = n.join('');
    return +n;
  }