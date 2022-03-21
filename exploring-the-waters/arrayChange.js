/*

You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

Example

For inputArray = [1, 1, 1], the output should be

1 -> [1, 2, 1]

2 -> [1, 2, 2]

3 -> [1, 2, 3]


solution(inputArray) = 3.

input: array
output: integer

-initialize a count variable to zero for the output (count = 0) track the number
-iterate the given array starting from the second index (1)
-if the previous index number is bigger than the next index num, increment the count variable
-increment the next index number as well
-return the value of the count variable

*/

function solution(arr) {
  let count = 0;

  for(let i =1; i<arr.length; i++) {
    while(arr[i-1] >= arr[i]) {
      ++count;
      ++arr[i];
    }
  }
  return count;
}


/* if vs. while statement

An if statement checks if an expression is true or false, and then runs the code inside the statement only if it is true. The code inside the loop is only run once...

if (x > y)
{
   // this will only happen once
}
A while statement is a loop. Basically, it continues to execute the code in the while statement for however long the expression is true.

---------

while (x > y)
{
  // this will keep happening until the condition is false.
}
When to use a while loop:

While loops are best used when you don't know exactly how many times you may have to loop through a condition - if you know exactly how many times you want to test a condition (e.g. 10), then you'd use a for loop instead.

*/
