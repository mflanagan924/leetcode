function numFriendRequests(ages) {
    let ageCounts = new Array(121).fill(0); // Initialize an array to count ages from 0 to 120
    let count = 0;

    // Count the frequency of each age
    for (let age of ages) {
        ageCounts[age]++;
    }

    // Count the number of valid friend requests
    for (let i = 15; i <= 120; i++) { // Start from age 15 as per the condition
        for (let j = Math.floor(0.5 * i) + 8; j <= i; j++) { // Start from the minimum age as per the condition
            count += ageCounts[i] * (ageCounts[j] - (i === j ? 1 : 0)); // Multiply the counts of two different ages
        }
    }

    return count;
}