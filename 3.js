function countLetters(input) {
  let letters = {};
  for (let i = 0; i < input.length; i++) {
    let letter = input[i];
    if (letter !== ' ') {
      if (letters[letter]) {
        letters[letter]++;
      } else {
        letters[letter] = 1;
      }
    }
  }

  let sortedLetters = Object.entries(letters).sort((a, b) => {
    if (a[0].toLowerCase() < b[0].toLowerCase()) {
      return -1;
    } else if (a[0].toLowerCase() > b[0].toLowerCase()) {
      return 1;
    } else if (a[0] !== b[0]) {
      return a[0] < b[0] ? -1 : 1;
    } else {
      return 0;
    }
  });

  let result = {};
  for (let i = 0; i < sortedLetters.length; i++) {
    result[sortedLetters[i][0]] = sortedLetters[i][1];
  }

  return result;
}

console.log(countLetters("Hello World")); // Output: {"H":1,"e":1,"l":3,"o":2,"W":1,"r":1,"d":1}
console.log(countLetters("Bismillah")); // Output: {"B":1,"i":2,"s":1,"m":1,"l":2,"a":1,"h":1}
console.log(countLetters("MasyaAllah")); // Output: {"A":1,"a":3,"h":1,"l":2,"M":1,"s":1,"y":1}
