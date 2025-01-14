function smallEnough(a, limit){
    const allBeloworEqual = a.every(num => num <= limit);
     return allBeloworEqual;
   }