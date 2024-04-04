function smash (words) {
    let ans = "";
   if (words.length === 0){
     return ans;
   }
   for (let i = 0; i < words.length-1; i++){
     ans += words[i] + " ";
   }
   ans += words[words.length - 1];
   return ans;
 };