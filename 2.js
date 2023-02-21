function pattern_count(text, pattern) {
  let count = 0;
  let patternLength = pattern.length;

  for (let i = 0; i <= text.length - patternLength; i++) {
    let subString = text.substr(i, patternLength);
    if (subString === pattern) {
      count++;
    }
  }

  return count;
}

console.log(pattern_count("palindrom", "ind"));
console.log(pattern_count("abrakadabra", "ab"));
console.log(pattern_count("hello", " "));
console.log(pattern_count("ababab", "aba"));
console.log(pattern_count("aaaaaa", "aa"))
console.log(pattern_count("hell", "hello"))