# Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

# Example

# For inputArray = [2, 4, 1, 0], the output should be
# solution(inputArray) = 3.


# make an empty storage
# loop through the given array
# get the absolute values from adjacent elements in the array
# put them in the new storage
# get the biggest number in the new storage


def solution(inputArray):
    arr = []
    for i in range(len(inputArray)-1):
        value = abs(inputArray[i]-inputArray[i+1])
        arr.append(value)

    return max(arr)
