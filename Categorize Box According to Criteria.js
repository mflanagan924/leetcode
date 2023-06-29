function categorizeBox(length, width, height, mass){
    //initialize false for both bulky and heavy
    let bulky = false;
    let heavy = false;
    //checks if Any of the dimensions of the box is greater or equal to 104. Or, the volume of the box is greater or equal to 109. If so sets bulky to true
    if (length >= Math.pow(10, 4) || width >= Math.pow(10, 4) || height >= Math.pow(10, 4) || length * width * height >= Math.pow(10, 9)){
        bulky = true;
    }
    //check if mass is greater or equal to 100 if so sets heavy to true
    if (mass >= 100){
        heavy = true;
    }
    //if bulky and heavy are true
    if (bulky === true && heavy === true){
        return "Both";
    }
    //if bulky and heavy are false
    if (bulky === false && heavy === false){
        return "Neither";
    }
    //if only bulky is true
    if (bulky === true && heavy === false){
        return "Bulky"
    }
    //if only heavy is true
    if (bulky === false && heavy === true){
        return "Heavy";
    }
}