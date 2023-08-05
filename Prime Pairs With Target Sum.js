function findPrimePairs(n){
    // Create an array to store whether a number is prime or not
      const isPrime = new Array(n + 1).fill(true);
      const sqrtN = Math.sqrt(n);
    
      // Set 0 and 1 as non-prime
      isPrime[0] = isPrime[1] = false;
    
      // Mark multiples of each prime as non-prime
      for (let i = 2; i <= sqrtN; i++) {
        if (isPrime[i]) {
          for (let j = i * i; j <= n; j += i) {
            isPrime[j] = false;
          }
        }
      }
    
      // Collect prime numbers into an array
      const primes = [];
      for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
          primes.push(i);
        }
      }
    //empty array to store answer
    let ans = [];
    // Two-pointer approach to find prime number pairs equal to n
      let left = 0;
      let right = primes.length - 1;
    
      while (left <= right) {
        const sum = primes[left] + primes[right];
        if (sum === n) {
          ans.push([primes[left], primes[right]]);
          left++; // Move the left pointer to the right
          right--; // Move the right pointer to the left
        } else if (sum < n) {
          left++; // Move the left pointer to the right
        } else {
          right--; // Move the right pointer to the left
        }
      }
    
      return ans;
    
    }