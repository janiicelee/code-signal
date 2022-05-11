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


function solution(sequence) {
  let bad = 0;
  for(let i=1; i<sequence.length; i++) {
    if (sequence[i] <= sequence[i-1]) {
      bad++;
    }

    if (bad > 1) {
      return false;
    }

    // if the element on current index is  less than or equal the adjacent element -2 steps back
    // && next element is less than or equal to the element on previous index return false
    // ex. [1, 3, 1]
    if (sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
      return false;
    }

  }
  return true;
}
