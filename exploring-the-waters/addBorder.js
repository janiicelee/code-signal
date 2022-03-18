/*

Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

input: array
output: array

add asteriks on the front and the end of each given string

make asteriks as long to cover the strings => get the length of the wall
add them to the front and end of the array

add asteriks on the front and the end of each string in the array

*/

function solution(arr) {
  let wallLength = arr[0].length + 2;
  let wall = '';

  for(let i=0; i<wallLength; i++) {
    wall += '*';
  }

  arr.unshift(wall);
  arr.push(wall);

  for(let j=1; j<arr.length -1; j++) {
    arr[j] = '*'.concat(arr[j], '*');
  }

  return arr;
}
