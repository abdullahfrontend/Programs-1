# A1 Cipher is a simple substution cipher that ehat converts each alphabetic character of the user provided text into its corresponding numerical position.

text = input('Enter the text you want to Encrypt').upper()
number =[]
for character in text:
  if character.isalpha():
   encrypt = ord(character) - ord("A") + 1
   number.append(encrypt)
print(number)
