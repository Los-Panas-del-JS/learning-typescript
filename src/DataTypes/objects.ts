// objects and functions
function squarePoint(point: {x: number, y: number}): void {
  point.x *= point.x;
  point.y *= point.y;
}

function printPoint(point: {x: number, y: number}): void {
  console.log(`(${point.x}, ${point.y})`);
}

const pointOne: {x: number, y: number} = {
  x: 2,
  y: 2,
};

printPoint(pointOne);
squarePoint(pointOne);
printPoint(pointOne);

function square3DPoint(point: {x: number, y: number, z?: number}): void {
  point.x *= point.x;
  point.y *= point.y;

  if (point.z) {
    point.z *= point.z;
  }
}

function print3DPoint(point: {x: number, y: number, z?: number}): void {
  if (point.z) {
    console.log(`(${point.x}, ${point.y}, ${point.z})`);

    return;
  }

  console.log(`(${point.x}, ${point.y})`);
}

print3DPoint(pointOne);
square3DPoint(pointOne);
print3DPoint(pointOne);

const pointTwo: {x: number, y: number, z?: number} = {
  x: 3,
  y: 3,
  z: 2,
};

print3DPoint(pointTwo);
square3DPoint(pointTwo);
print3DPoint(pointTwo);

pointTwo.z = undefined;

printPoint(pointTwo);

// types with points
type Point = {
  x: number,
  y: number,
  z?: number,
};

const pointThree: Point = {
  x: 5,
  y: 4,
};

function squarePointV2(point: Point): void {
  point.x *= point.x;
  point.y *= point.y;
}

function printPointV2(point: Point): void {
  console.log(`(${point.x}, ${point.y})`);
}

printPointV2(pointThree);
squarePointV2(pointThree);
printPointV2(pointThree);
