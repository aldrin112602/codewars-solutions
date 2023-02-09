function alphabetPosition(text) {
  return text.replace(/[^\w\s]/gi, '').split('').map(letter => letter.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1).filter(i => i >= 0).join(' ');
}
