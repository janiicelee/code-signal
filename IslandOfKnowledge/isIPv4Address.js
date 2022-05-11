/*

An IP address is a numerical label assigned to each device (e.g., computer, printer) participating in a computer network that uses the Internet Protocol for communication. There are two versions of the Internet protocol, and thus two versions of addresses. One of them is the IPv4 address.

Given a string, find out if it satisfies the IPv4 address naming rules.

Example

For inputString = "172.16.254.1", the output should be
solution(inputString) = true;

For inputString = "172.316.254.1", the output should be
solution(inputString) = false.

316 is not in range [0, 255].

For inputString = ".254.255.0", the output should be
solution(inputString) = false.

There is no first number.

*/

function solution(inputString) {
    const arr = inputString.split('.');

    if (arr.length !== 4) return false;

    for(let i=0; i<arr.length; i++) {
        if (arr[i] === '' || arr[i] < 0 || arr[i] > 255) return false;
        if (arr[i] === '00' || arr[i] === '01') return false;
        if (arr[i] != parseInt(arr[i])) return false;

    }
    return true;
}
