function sctc(sin) {
    function isValidNumber(value) {
      return typeof value === "number" && isFinite(value);
    }
  
    let ans = [Math.round(sin * 100)/100];
    let cos = Math.sqrt(1 - (sin * sin));
    if (isValidNumber(cos)) {
      ans.push(Math.round(cos * 100)/100);
    }
  
    let tan = sin / cos;
    if (isValidNumber(tan)) {
      ans.push(Math.round(tan * 100)/100);
    }
  
    let cot = cos / sin;
    if (isValidNumber(cot)) {
      ans.push(Math.round(cot * 100)/100);
    }
  
    return ans;
  }