func smallestEvenMultiple(n int) int {
    //checks if the number is odd
    if (n%2 > 0){
        return n * 2;
    //statement if the number is even
    } else {
        return n;
    }
}
