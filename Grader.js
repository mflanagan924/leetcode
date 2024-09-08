katye610, milk8man
function grader(score) {
  if (score>1 || score<0.6) {
    return 'F';
  } else if (score >= .9) {
      return 'A';
    } else if (score >= .8) {
        return 'B';
      } else if (score >= .7) {
      return 'C';
        } else {
            return 'D';
          }
}