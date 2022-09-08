const findWeightedSum = (arr = [], level = 1, res = 0) => {
   for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] === 'number'){
         res += (level * arr[i]);
      }else if(Array.isArray(arr[i])){
         res += findWeightedSum(arr[i], level + 1)
      };
   };
   return res;
};