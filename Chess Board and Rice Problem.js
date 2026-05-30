// This program demonstrates exponential growth by placing rice grains on a chessboard. 
// The first square contains 1 grain, and each subsequent square contains twice as many grains as the previous one. 
// The program calculates the number of grains on each square and the total number of grains on the chessboard.
// Language : JavaScript

let rice = 2;

for (let square = 1; square <= 64; square++) {
  console.log(`${rice}`);
  rice *= 2;
}
