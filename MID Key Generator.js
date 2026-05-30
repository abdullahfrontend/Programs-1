// This program generates a random alphanumeric key of a specified length. 
// It selects random characters from a set containing upper and lower case letters and digits, then combines them to create a unique 15 chracter key.

function keygenerator(length) {
  const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

const key = keygenerator(15);
console.log(key);
