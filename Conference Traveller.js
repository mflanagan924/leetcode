function conferencePicker(citiesVisited, citiesOffered) {
	for (let i = 0; i < citiesOffered.length; i++){
    if (citiesVisited.indexOf(citiesOffered[i]) < 0){
      return citiesOffered[i];
    }
  }
  return "No worthwhile conferences this year!";
}