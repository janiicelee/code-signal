/*

Two arrays are called similar if one can be obtained from another by swapping at most one pair of elements in one of the arrays.

Given two arrays a and b, check whether they are similar.

Example

For a = [1, 2, 3] and b = [1, 2, 3], the output should be
solution(a, b) = true.

The arrays are equal, no need to swap any elements.

For a = [1, 2, 3] and b = [2, 1, 3], the output should be
solution(a, b) = true.

We can obtain b from a by swapping 2 and 1 in b.

For a = [1, 2, 2] and b = [2, 1, 1], the output should be
solution(a, b) = false.

Any swap of any two elements either in a or in b won't make a and b equal.



input: array
output: boolean

"track the indices"

make an empty array
loop over the first array
if an element at the same index of both arrays is not the same,
store that index to the new array

if there's more than two indices, that means you need to swap more than once so return false

if there's two indices, swap each number in the array using those indices,
if a[0] !== b[1] || b[0] !== a[1] return false

return true if the new array length is 0 or 2

*/

function solution(a, b){

  let arr = [];

  for(let i=0; i<a.length; i++) {
    if(a[i] !== b[i]) {
      arr.push(i);
    }
  }

  if (arr.length > 2 ) {
    return false;
  }

  if (arr.length === 2) {
    if(a[arr[0]] !== b[arr[1]] || b[arr[0]] !== a[arr[1]]) {
      return false;
    }
  }

  return arr.length === 0 || arr.length ===2;
}
