with open("input", "r") as file:
    input = file.read()

    floor = 0
    position = 1

    for char in input:
        if char == "(":
            floor = floor + 1
        elif char == ")":
            floor = floor - 1

        if floor == -1:
            break

        position += 1
    
    print(position)