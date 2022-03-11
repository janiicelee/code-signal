/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size.
Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1.
He may need some additional statues to be able to accomplish that.
Help him figure out the minimum number of additional statues needed.

For statues = [6, 2, 3, 8], the output should be
solution(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

-input: array
-output: integer

- make a new storage
- get the minimum and maximum value of the array
- between the minimum and maximum value, if its not in the given array, store it in the new array
- return the length of the array

*/

function solution(statues) {
  var min = Math.min(...statues);
  var max = Math.max(...statues);
  var arr = [];

  for (var i=min; i<max; i++) {
    if (!statues.includes(i)) {
      arr.push(i);
    }
  }
  return arr.length;
}
