/**
 * Input
 *
 * number: 3
 *
 * Output
 * 1 2 3
 * 8 9 4
 * 7 6 5
 * 
 * (rx,cy)
 * 
 * (0,0), (0,1), (0,2), (1,2), (2,2), (2,1), (2, 0), (1, 0), (1,1)
 * 
 * 1   2  3 4
 * 12 13 14 5
 * 11 16 15 6
 * 10  9  8 7
 * 
 * (0,0), (0,1), (0,2), (0,3), (1,3), (2,3), (3,3), (3,2), (3,1), (3,0), (2,0), (1,0), (1,1), (1,2), (2,2), (2,1)
 */

type Matrix = number[][];

function generateSnail(squareLength: number): Matrix {
  const lengthLimit = squareLength * squareLength;

  for (
    let matrixIndex = 0;
    matrixIndex < lengthLimit;
    matrixIndex += 1
  ) {
    
  }
}
