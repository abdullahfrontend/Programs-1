# This program finds and displays the rightmost (last) digit of a given number. 
# It uses the modulus (%) operator to extract the last digit.
# Output:
# The last digit of the entered number.
# Language : Python

num = int(input("Enter a Number"))
digit = num % 10
print("The Right most digit of Number is :" , digit)
