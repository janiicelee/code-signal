def solution(statues):
    arr = []
    for i in range(min(statues), max(statues)):
        if i not in statues:
            arr.append(i)
    return len(arr)
