function minMovesToSeat(seats, students){
    seats.sort(function (a, b) {  return a - b;  });
    students.sort(function (a, b) {  return a - b;  });
    let ans = 0;
    for (let i = 0; i < seats.length; i++){
        ans += Math.abs(seats[i] - students[i]);
    }
    return ans;
}