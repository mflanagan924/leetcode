function countPrimes(n){
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
 console.log(primes)
 let ans = 0;
 for (let i = 0; i < primes.length; i++){
   if (primes[i] < n){
     ans += 1;
   }
 }
 return ans;
}