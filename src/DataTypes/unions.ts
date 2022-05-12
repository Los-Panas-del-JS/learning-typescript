function printNumber(num: number | string): void {
  if (typeof num === 'number') {
    console.log(`${num}.00`);

    return;
  }

  if (num.indexOf('.') !== -1) {
    console.log(num);

    return;
  }

  console.log(`${num}.00`);
}

printNumber(12);
printNumber('12.00');
printNumber('12');

/**
 * k = scalar
 * v = vector
 *
 * v * k
 * k * k
 * v * v
 */

type Vector = {
    x: number;
    y: number;
    z: number;
}

type Scalar = number;

type Component = Vector | Scalar;


function multiply(compOne: Component, compTwo: Component): Component {
  // k * k
  if (isScalar(compOne) && isScalar(compTwo)) {
    compOne = <Scalar>compOne;
    compTwo = <Scalar>compTwo;

    return compOne * compTwo;
  }

  const resultVector: Vector = {x:0, y:0, z:0};

  // v * v
  if (isVector(compOne) && isVector(compTwo)) {
    compOne = <Vector>compOne;
    compTwo = <Vector>compTwo;

    resultVector.x = compOne.x * compTwo.x;
    resultVector.y = compOne.y * compTwo.y;
    resultVector.z = compOne.z * compTwo.z;

    return resultVector;
  }

  // v * k
  if (isVector(compOne)) {
    compOne = <Vector>compOne;
    compTwo = <Scalar>compTwo;

    resultVector.x = compOne.x * compTwo;
    resultVector.y = compOne.y * compTwo;
    resultVector.z = compOne.z * compTwo;

    return resultVector;
  }

  // k * v
  if (isVector(compTwo)) {
    compTwo = <Vector>compTwo;
    compOne = <Scalar>compOne;

    resultVector.x = compTwo.x * compOne;
    resultVector.y = compTwo.y * compOne;
    resultVector.z = compTwo.z * compOne;

    return resultVector;
  }
}

function princtComponent(comp: Component): void {
  if (isVector(comp)) {
    comp = <Vector>comp;

    console.log(`vector = (${comp.x}, ${comp.y}, ${comp.z})`);
    console.log();

    return;
  }

  comp = <Scalar>comp;

  console.log(`scalar = ${comp}`);
  console.log();
}

function isScalar(comp: Component): boolean {
  return (typeof comp === 'number');
}

function isVector(comp: Component): boolean {
  return (typeof comp === 'object');
}

const scalarOne = 2;
const scalarTwo = 3;
const vectorOne: Vector = {
  x: 2,
  y: 2,
  z: 2,
};
const vectorTwo: Vector = {
  x: 1,
  y: 3,
  z: 4,
};

princtComponent(multiply(scalarOne, scalarTwo)); // k * k
princtComponent(multiply(vectorOne, vectorTwo)); // v * v
princtComponent(multiply(vectorOne, scalarOne)); // v * k
princtComponent(multiply(scalarTwo, vectorTwo)); // k * v

