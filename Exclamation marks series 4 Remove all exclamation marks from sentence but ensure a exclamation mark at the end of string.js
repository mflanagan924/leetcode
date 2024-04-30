function remove (string) {
  let newString = string.replace(/!/g, "");
  newString += "!";
  return newString;
}