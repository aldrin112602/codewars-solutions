function firstNonRepeatingLetter(s) {
  s = s.split("");
  let count,
    char = "";
  for (let i = 0; i < s.length; i++) {
    count = 1;
    for (let j = 0; j < s.length; j++) {
      if (i == j) continue;
      if (s[i].toLowerCase() == s[j].toLowerCase()) count++;
    }
    if (count == 1) {
      char = s[i];
      break;
    }
  }
  return char;
}
