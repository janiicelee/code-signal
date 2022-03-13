/*

input: array
output: array

make a new storage
loop over the input array
find the longest string in the array
put the longest string in the new storage
check if the other strings has the same length with the longest string
also put them in the new storage
return the storage
*/


function solution(inputArray) {

  var longestStrings = [];
  var longest = 0;

  for(var string of inputArray) {
    if (string.length > longest) {
      //initialize storage when the for loop starts
      longestStrings= [];
      longest = string.length;
      longestStrings.push(string);
    } else if ( string.length === longest)
      longestStrings.push(string);
    }
  return longestStrings;
}

solution(["ab", "aad", "ad", "vcd", "aba"]);
