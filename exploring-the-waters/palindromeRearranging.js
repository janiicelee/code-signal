/*

Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
solution(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

input: string
output: boolean

- convert the input string into an array
- make an object to count the letters in the string
- if each letter has even numbers then the function will return true
- if one letter is counted as 1, and others have even numbers, it will also return true
- if theres more than one letters that has odd numbers the function returns false

ex) [a,a,b,b,c] = true
ex) [a,a,b,b,c,d]= false

- make a variable to count the property that has odd numbers
- return false if theres more than one property that has odd number

*/


function solution(inputString) {
  const arr = inputString.split("");
  let letters = {};

  for(let i=0; i<arr.length; i++) {
    if(!letters.hasOwnProperty(arr[i])) {
      letters[arr[i]] = 1;
    } else {
      letters[arr[i]]++;
    }
  }

  let odds = 0;
  for (letter in letters) {
    if(letters[letter] %2 !== 0) {
      odds++;
    }
  }

  return odds > 1 ? false: true;
}
