function countDaysTogether(arriveAlice, leaveAlice, arriveBob, leaveBob){
    const year = (new Date()).getFullYear(); // Get the current year
  const datesArray = [];

  // Loop through each month (1 to 12)
  for (let month = 1; month <= 12; month++) {
    // Get the number of days in the current month
    const daysInMonth = new Date(year, month, 0).getDate();

    // Loop through each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      // Skip February 29th (leap year)
      if (month === 2 && day === 29) continue;

      // Format the date as "MM-DD"
      const formattedDate = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      
      // Add the formatted date to the array
      datesArray.push(formattedDate);
    }
  }
  let alice = [];
  for (let i = datesArray.indexOf(arriveAlice); i <= datesArray.indexOf(leaveAlice); i++){
      alice.push(datesArray[i]);
  }
  let bob = [];
  for (let i = datesArray.indexOf(arriveBob); i <= datesArray.indexOf(leaveBob); i++){
      bob.push(datesArray[i]);
  }
  let ans = 0;
  for (let i = 0; i < alice.length; i++){
      if (bob.indexOf(alice[i]) >= 0){
          ans++;
      }
  }
  return ans;
}