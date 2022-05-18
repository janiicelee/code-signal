/*

write a function that checks if a string is a balanced brackets.

input: string
output: boolean

- create a stack
- if the current character is an opening bracket, push it into the stack
- if the current character is a closing bracket, pop it from the stack
- if the popped character matches with the starting bracket, return true
- if not, return false

*/

function isBalanced(str) {

  // if given string length is less than 1, return false
  if (str.length <= 1)
    return false

  // create variable to see if matches
  let matchingOpeningBracket, ch
  // create stack
  let stack = []

  // storage for opening and closing brackets
  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  //loop through the given string
  for (let i = 0; i < str.length; i++) {
    ch = str[i]

    // pop each item only in the array
    if (closingBrackets.indexOf(ch) > -1) {
      // if theres a matchingOpeningBracket and it doesn't match with the closing bracket return false
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return false
      }
      // if it matches, push it to the stack
    } else {
      stack.push(ch)
    }
  }

  return (stack.length == 0)
};

console.log(isBalanced('{}[]()'))
