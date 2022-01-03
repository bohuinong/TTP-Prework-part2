function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let prod = 1
  for(let i=0;i<args.length;++i)
    prod = prod * args[i]
  return prod
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;