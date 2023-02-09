function duplicateEncode(word) {
  word = word.toLowerCase();
  let newStr = '';
  for(let i = 0; i < word.length; i++) {
    let count = 1;

    for(let j = 0; j < word.length; j++) {
      if(i === j) continue;
      if(word.charAt(i) === word.charAt(j)) count++;
    }
    
    if(count > 1) newStr += ')';
    else newStr += '(';
  }
  
  return newStr;
}
