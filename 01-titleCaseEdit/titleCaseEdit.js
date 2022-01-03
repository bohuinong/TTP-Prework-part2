const timesInWords = require("sinon/lib/sinon/util/core/times-in-words")

function titleCaseEdit(title) {
  // Insert code here;
  let words = title.split(" ")
  let temp = ""
  for(let i = 0;i<words.length;++i){
    temp += words[i].charAt(0).toUpperCase()+words[i].slice(1)
    i==words.length-1? temp+="" : temp+=" "
  }
  return temp
}
// Do not edit this line;
module.exports = titleCaseEdit;