function subsetXORSum(nums){
    const subsets = [];
  
      function generateSubsets(index, currentSubset) {
          if (index === nums.length) {
              subsets.push([...currentSubset]);
              return;
          }
  
          // Include the current element in the subset
          currentSubset.push(nums[index]);
          generateSubsets(index + 1, currentSubset);
  
          // Exclude the current element from the subset
          currentSubset.pop();
          generateSubsets(index + 1, currentSubset);
      }
  
      generateSubsets(0, []);
      console.log(subsets)
      
      let ans = 0;
      for (let i = 0; i < subsets.length; i++){
              console.log(ans)
          if (subsets[i].length === 0){
              ans += 0;
              break;
          }
          
          let subAns = subsets[i][0];
          for (let j = 1; j < subsets[i].length; j++){
              subAns = subAns^subsets[i][j];
          }
          ans += subAns;
      }
      return ans;
  }
  
  