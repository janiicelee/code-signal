"""
It frustrates you more than you'd like to admit that the solution operator in Python can be applied to non-integer values. When you write code, you expect the result of the solution operator to always be an integer, but thanks to Python this isn't always the case.

To fix this, you've decided to write your own solution operator as a function. Your task is to implement a function that, given a number n, returns - 1 if this number is not an integer and n % 2 otherwise. It is guaranteed that if the number represents an integer, it will be written without a decimal point.

Example )

For n = 15, the output should be
solution(n) = 1

For n = 23.12, the output should be
solution(n) = -1.


input: numeric n
output: integer


"""


def solution(n):
    if isinstance(n, int):
        return n % 2
    else:
        return -1
