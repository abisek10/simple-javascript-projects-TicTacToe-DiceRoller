
  // Split the string into words, handling extra spaces correctly
  const words = a.trim().split(/ +/); // Using /\ +/ for any consecutive spaces

  // Reverse each word individually
  const reversedWords = words.map(word => word.split('').reverse().join(''));

  // Join the reversed words back into a string, handling extra spaces
  return reversedWords.join(' ');
}

// Example usage
let result = reverseWords("  Hello  World !   ");
console.log(result); // Output: "dlroW olleH !  "