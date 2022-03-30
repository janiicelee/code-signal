def solution(inputArray):

    arr = [];
    for i in range(0, len(inputArray)-1):
        arr.append(inputArray[i] * inputArray[i+1])
    return max(arr)
