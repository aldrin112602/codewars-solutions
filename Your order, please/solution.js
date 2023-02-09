function order(words){
  return words.length > 0 ? words.match(/\b\w*\d\w*\b/g).sort((a, b) => +a.match(/\d+/) - +b.match(/\d+/)).join(' ') : '';
  
}
