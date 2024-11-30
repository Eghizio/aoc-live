with open("input", "r") as file:
    input = file.read()

    floor = 0

    for char in input:
        if char == "(":
            floor = floor + 1
        elif char == ")":
            floor = floor - 1
    
    print(floor)