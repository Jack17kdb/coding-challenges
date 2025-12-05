import argparse

def encryption(text, shift):
  result = ""
  for char in text:
    if char.isalpha():
      base = 65 if char.isupper() else 97
      result += chr((ord(char) - base + shift) % 26 + base)
    else:
      result += char
  print(f"Result of encryption is: {result}")

def decryption(cipher, shift):
  result = ""
  for char in cipher:
    if char.isalpha():
      base = 65 if char.isupper() else 97
      result += chr((ord(char) - base - shift) % 26 + base)
    else:
      result += char
  print(f"Result of decryption is: {result}")

if __name__ == '__main__':
  print("Caesar cipher substitution")
  parser = argparse.ArgumentParser(description = "Caesar cipher substitution")
  parser.add_argument("text", type=str, help="Text to encrypt or decrypt")
  parser.add_argument("shift", type=int, help="An integer representing the key")
  parser.add_argument("-o", "--option", type=str, help="Operation to perform", choices=['encrypt', 'decrypt'])
  args = parser.parse_args()

  if args.option == "encrypt":
    encryption(args.text, args.shift)
  elif args.option == "decrypt":
    decryption(args.text, args.shift)
  else:
    print("Please choose an option!")
