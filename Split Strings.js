function solution(str){
    let ans = [];
   for (let i = 0; i < str.length; i+=2){
     let x = "";
     x += str[i];
     if (str[i+1] === undefined){
         x+= "_";
     } else {
         x += str[i+1];
     }
     
     ans.push(x);
   }
   return ans;
 }