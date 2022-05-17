type Scalar = number | string;

const s1: Scalar = 3.21;
const s2: Scalar = 3.22;

console.log(s1 * s2);

type Matrix = Scalar[][];

const matrix: Matrix = [
  [0, 1, 2],
  [3, 4, 5],
];

console.log(matrix);

type Point = {
  x: Scalar,
  y: Scalar,
};

const point: Point = {x:0, y:0};

console.log(point);
