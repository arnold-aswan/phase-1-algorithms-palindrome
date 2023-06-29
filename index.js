function isPalindrome(word) {
  // Write your algorithm here
  let wordSplit = word.split("")
  let wordReverse = wordSplit.reverse()
  let wordJoin = wordReverse.join("")

  if(wordJoin !== word) {
    return false
  } else {
    return true
  }

}

isPalindrome('mom')
/* 
  Add your pseudocode here
*/ 

/*
1. receives a string as input argument
2. if string reads same fowards and backwards
    then return true
    else return false
 3. convert string to array and test if it reads the same 
    if it's reversed   
*/
  

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
