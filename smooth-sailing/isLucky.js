/*

Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.

Example

For n = 1230, the output should be
solution(n) = true;
For n = 239017, the output should be
solution(n) = false.

input: integer (n)
output: boolean

make integer into an array => Array.from(String(n), Number)
check the length of the array
calculate the first half of the digits and the second half
if its equal return true

*/

function solution(n) {

  var na = [];
  na = Array.from(String(n), Number);

  var firsthalf = 0;
  var secondhalf = 0;

  for(var i=0; i<(na.length /2); i++) {
    firsthalf += na[i];
  }

  for(var i=na.length/2; i < na.length; i++) {
    secondhalf += na[i];
  }


  if(na.length %2 ===0 && firsthalf === secondhalf) {
    return true;
  }
  return false;
}

console.log(solution(123321));
