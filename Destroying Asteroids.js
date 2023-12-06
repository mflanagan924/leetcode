function asteroidsDestroyed(mass, asteroids){
    //sort asteroids in increasing order
    asteroids.sort(function (a, b) {  return a - b;  });
    //for loop to check if asteroid[i] is less than or equal to mass
    for (let i = 0; i < asteroids.length; i++){
        //if true add mass of asteroid[i] to total mass
        if (asteroids[i] <= mass){
            mass += asteroids[i];
        //if false return true
        } else {
            return false;
        }
    }
    //if all asteroids end up being less than return true
    return true;
}