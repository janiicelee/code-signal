/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.


For sequence = [1, 3, 2, 1], the output should be
solution(sequence) = false.

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
solution(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].


input: array
output: boolean

[3, 6, 5, 8, 10, 20, 15]
false

- initialize a counter
- if the value is decreasing from the previous index, increment the counter
- if the counter value is more than one, return false

*/

function solution(array) {

  var counter = 0;

  for(var i=0; i<array.length-1; i++) {
    if(array[i] >= array[i+1]) {
      counter += 1;
    }
  }

  var max = Math.max(...array);
  console.log(max);

  var index = array.indexOf(max);
  console.log(index);
  var arr=[];

  for(var i=index+1; i<array.length; i++) {
    if (array[i] < max) {
      arr.push(array[i]);
    }
  }

  if (counter >1 || arr.length > 1) {
    return false;
  }
  return true;
}
