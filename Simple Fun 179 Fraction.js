function fraction(a, b) {
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(a,b);
    let fraction = [a/gcd, b/gcd];
    return fraction[0] + fraction[1];
    
    
  }