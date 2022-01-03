function pairSum(nums, target) {
  // Insert code here;
  if(nums.length <= 1)
    throw "array can't be less than 1"
  for(let i =0;i<6;++i){
    for(let n =i+1;n<nums.length;++n){
      console.log(nums[i]+nums[n])
      if(nums[i]+nums[n]===target)
        return true
    }
  }
  return false
}

console.log(pairSum([1,2,3,4,5,6],7))

// Do not edit this line;
module.exports = pairSum;