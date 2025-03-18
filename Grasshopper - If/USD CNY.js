function usdcny(usd) {
    let after = usd * 6.75;
    after = (Math.round(after * 100) / 100).toFixed(2).toString();
    return after + " Chinese Yuan";
  }