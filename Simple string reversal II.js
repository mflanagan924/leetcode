function solve(st,a,b){
    let before = [];
     let during = [];
     let after = [];
     for (let i = 0; i < a; i++){
       before.push(st[i]);
     }
     for (let i = a; i <= b; i++){
       during.push(st[i]);
     }
     during = during.reverse();
     for (let i = b+1; i < st.length; i++){
       after.push(st[i]);
     }
     let ans = before.concat(during, after);
     return ans.join("");
   }