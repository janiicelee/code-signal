/*

Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

Example

For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
solution(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

input: array
output: array

make a copy of the given array
filter the elements that are negative one from the copied array
sort the copied array
loop over the original array
if the element is not negative one, replace them with elements in the copied array
increment the index
return the original array
*/


function solution(a) {
    var a2 = a;
    a2 = a2.filter((element) => {
        if(element !== -1) {
            return element;
        }
    }).sort((a,b)=> {
        return a-b;
    });

    var idx = 0;
    for(var i=0; i<a.length; i++) {
        if(a[i] !== -1) {
            a[i] = a2[idx];
            idx++;
        }
    }
    return a;
}
