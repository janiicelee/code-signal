/*

Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
solution(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

input: two arrays
output: integer

loop over the first array and the second array
if they have the same character, put it in a new storage
remove the same character in the second array, so that it doesn't put it in the array again
return the length of the new storage

*/


function solution(s1, s2) {

    var arr1 = [];
    var arr2 = [];

    arr1 = Array.from(s1); // Array.from() creates a shallow-copied array instance from an array-like or iterable objects
    arr2 = Array.from(s2);

    arr1.sort();
    arr2.sort();

    var chars = [];

    for(var i=0; i<arr1.length; i++) {
        for(var j=0; j<arr2.length; j++) {
            if(arr1[i] === arr2[j]) {
                chars.push(arr1[i]);
                arr2.splice(j, 1); // remove the previous element so that it doesn't count again
                break;
            }
        }
    }
    return chars.length;
}
