/*
For n = 2, the output should be
solution(n) = 5;
For n = 3, the output should be
solution(n) = 13.

1*0 + 1 = 1
+2
2*2 + 1 = 5
+2
3*4 + 1 = 13
+2
4*6 + 1 = 25

*/

function solution(n) {
  let value = 0;
  for(let i=0; i<n-1; i++) {
    value += 2;
  }

  return n * value + 1;
}
