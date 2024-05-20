function isPalindrome(word) {
  let testWord = word.split('').reverse().join('')

  return testWord === word ? true : false;
}
/* 
  Add your pseudocode here
  Take string 
  Declare testString
  Split into array
  Reverse reverse array
  Rejoin intro string
  If testWord === word 
  Return truthy
  Else falsey
*/

/*
  Add written explanation of your solution here
  The function takes a string that needs to be tested to see if it reads the same
  way backwards aka a palindrome
  String will need to be reversed 
  In order to reverse string you need to first split it into an array
  Call the reverse method on the array
  Join the array back together with the join method
  Then finally check if the reversed word is === the original word passed in
  If it is the same return true, otherwise return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("bob"));
}

module.exports = isPalindrome;
