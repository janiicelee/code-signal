/*
Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.

You are given an array of positive integers - the weights of the people. Return an array of two integers, where the first element is the total weight of team 1, and the second element is the total weight of team 2 after the division is complete.

Example

For a = [50, 60, 60, 45, 70], the output should be
solution(a) = [180, 105].

input: array
output: array

make a sum variable for each team (team1, team2) and initialize it to zero
loop over the input array
if the index is an odd number , add the value to the first team
if the index is an even number, add the value to the second team
get the variables and put it in an array

*/

function solution(arr) {
  let team1 = 0;
  let team2 = 0;

  for(let i=0; i<arr.length; i++) {
    if(i%2===0) { // i = 0, 2, 4
      team1 += arr[i];
    } else {
      team2 += arr[i];
    }
  }
  return [team1, team2];
}
