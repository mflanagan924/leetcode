//helped
function wateringPlants(plants, capacity){
    let capCount = capacity
   let answ = 0
   for(let i =0; i < plants.length; i++ ){
       if(plants[i] > capCount){
           capCount = capacity
           answ = answ + i + (i + 1)
       }else{
           answ += 1
       }
       capCount -= plants[i]
   }
   return answ
}
