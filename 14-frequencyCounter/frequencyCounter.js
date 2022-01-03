function frequencyCounter(word) {
  // Insert code here;
  let freq ={}
  for(let i =0;i<word.length;++i){
    if(!freq.hasOwnProperty(word[i]))
      freq[word[i]] = 1
    else
      freq[word[i]] = freq[word[i]]+1
  }
  return freq
}

console.log(frequencyCounter("Hello"))

// Do not edit this line;
module.exports = frequencyCounter;