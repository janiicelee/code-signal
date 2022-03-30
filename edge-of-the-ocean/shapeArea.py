def solution(n):
    value = 0;
    for i in range(0, n-1):
        value += 2;
    return n*value +1
