function calculateTip(amount, rating) {
    rating = rating.toLowerCase();
  if (rating === "excellent"){
    return Math.ceil(amount * .2);
  }
  if (rating === "great"){
    return Math.ceil(amount * .15);
  }
  if (rating === "good"){
    return Math.ceil(amount * .1);
  }
  if (rating === "poor"){
    return Math.ceil(amount * .05);
  }
  if (rating === "terrible"){
    return 0;
  }
  else {
    return "Rating not recognised";
  }
  }