function tribonacci(n){
    //when n === 0, 1, or 2
   if (n === 0){
       return 0;
   }
   if (n === 1){
       return 1;
   }
   if (n === 2){
       return 1;
   }
   if (n === 3){
       return 2;
   }
   //prepopulate the Tribonacci array
   let F = [0, 1, 1];
   //for loop to populate Tribonacci array to n
   for (let i = 3; i <= n; i++){
       F.push(F[i - 1] + F[i - 2] + F[i - 3]);
   }
   //return the last item in array which is T of n
   return (F[F.length - 1]);
}