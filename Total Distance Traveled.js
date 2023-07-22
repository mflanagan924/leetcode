function distanceTraveled(mainTank, additionalTank){
    //initialize total liters of fuel used
    let total = 0;
    //while loop to subtract 5 from main tank and add 1 to main tank from additional tank, count how much is used by adding it to the total
    while (mainTank >= 5){
        total += 5;
        mainTank -= 5;
        if (additionalTank > 0){
            mainTank += 1;
            additionalTank -= 1;
        }
    }
    //if the main tank is less than 5 add the remaining amount to total
    if (mainTank < 5){
        total += mainTank;
        mainTank -= mainTank;
    }
    //return th total distance traveled which is total fuel used times 10
    return 10 * total;
}