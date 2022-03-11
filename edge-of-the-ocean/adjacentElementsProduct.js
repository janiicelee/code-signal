/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.

*/

function solution(inputArray) {
  var arr = [];
  for (var i=0; i<inputArray.length-1; i++) {
      arr.push(inputArray[i] * inputArray[i+1]);
  }
  var largest = Math.max(...arr);
  return largest;
};
