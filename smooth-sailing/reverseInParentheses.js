/*
Write a function that reverses characters in (possibly nested) parentheses in the input string.

Input strings will always be well-formed with matching ()s.

Example

For inputString = "(bar)", the output should be
solution(inputString) = "rab";
For inputString = "foo(bar)baz", the output should be
solution(inputString) = "foorabbaz";
For inputString = "foo(bar)baz(blim)", the output should be
solution(inputString) = "foorabbazmilb";
For inputString = "foo(bar(baz))blim", the output should be
solution(inputString) = "foobazrabblim".
Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".

input: string
output: string

find the pairs of parentheses
find the part of the string we need to reverse
reverse the string
repeat until all paranthese are replaced

*/

//find the pairs of parentheses
function getStartAndEndIndexes(str) {
  let startIndex = null;
  let endIndex = null;
  const chars = str.split('');

  for(let i=0; i<chars.length; i++) {
    const c = chars[i];
    if ( c === '(') {
      startIndex = i;
    } else if (c === ')') {
      endIndex = i;
      break;
    }
  }

  if (startIndex === null || endIndex === null ) {
    return null;
  }
  return { startIndex, endIndex};

}

//find the part of the string we need to reverse
function reverseParentheses(startIndex, endIndex, str) {
  const startSegmant = str.substring(0, startIndex);
  const parenthesisSegmant = str.substring(startIndex+1, endIndex);
  const endSegmant = str.substring(endIndex+1, str.length);

  return startSegmant + reverse(parenthesisSegmant) + endSegmant;
}

//reverse the string
function reverse(str) {
  let newStr = '';
  for(let i = str.length-1; i>=0; i--) {
    newStr += str[i];
  }
  return newStr;
}

//repeat until all parantheses are replaced
//used recursion
function reverseInParantheses(str) {
  const indexes = getStartAndEndIndexes(str);

  if(!indexes) {
    return str;
  }

  const {startIndex, endIndex} = indexes;
  const newStr = reverseParentheses(startIndex, endIndex, str);

  return reverseInParantheses(newStr);
}


console.log(reverseInParantheses('foo(bar(baz))blim'));
