// Question:
// Write a function called reverseWords that takes a sentence as a string and returns a new string where each word in the sentence is reversed while maintaining the order of words.

// For example:

// javascript
// Copy code
// console.log(reverseWords("Hello World")); 
// // Output: "olleH dlroW"

// console.log(reverseWords("JavaScript is fun")); 
// // Output: "tpircSavaJ si nuf"
// Instructions:
// Define a function named reverseWords.
// The function should take a string as an input parameter.
// Inside the function, split the input string into an array of words.
// Reverse each word in the array.
// Join the reversed words back into a string with spaces between them.
// Return the final reversed sentence.
// Feel free to try solving this question, and once you're done, you can compare your solution with the provided one. If you have any questions or need clarification on the solution, feel free to ask!

function reverseWords(a) {
  const words = a.trim().split(/\ +/)
  const reverseWords = words.map(word => word.split(" ").reverse().join(" "))
  return reverseWords.join(" ")
}

let result = reverseWords("Hello World")
console.log(result)

// function reverseWords(a) {
//   // Split the string into words, handling extra spaces correctly
//   const words = a.trim().split(/ +/); // Using /\ +/ for any consecutive spaces

//   // Reverse each word individually
//   const reversedWords = words.map(word => word.split('').reverse().join(''));

//   // Join the reversed words back into a string, handling extra spaces
//   return reversedWords.join(' ');
// }

// Example usage
// let result = reverseWords("  Hello  World !   ");
// console.log(result); // Output: "dlroW olleH !  "
