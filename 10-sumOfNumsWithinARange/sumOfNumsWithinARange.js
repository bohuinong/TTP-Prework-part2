function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let count = 0
  let begin = nums.indexOf(start)
  if(begin == -1)
    return count
  for(let i =begin;i<nums.length;++i){
    count++
    if(nums[i]==end)
      return count
  }
  return count
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;