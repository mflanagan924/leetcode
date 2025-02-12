function slope(points)
{
if (points[0] - points[2] === 0){
  return "undefined";
}
const result = ((points[1] - points[3])/(points[0] - points[2]));
return result.toString();
}