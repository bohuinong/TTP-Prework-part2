function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  let mySet = new Set()
  for(let sets of args){
    sets.forEach(key => mySet.add(key))
  }
  return mySet
}
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;