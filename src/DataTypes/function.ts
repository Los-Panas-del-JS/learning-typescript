// normal function
function sayHi(name: string): string {
  return `Hello ${name}, I am a simple function`;
}

console.log(sayHi('Diego'));

// arrow function
const sayHi2 = (name: string) => {
  return `Hello ${name}, I am a simple function`;
}

console.log(sayHi2('Carlos'));

// auto exec functions
const autoExec = function (a: number, b: number): number {
  return a + b;
}

console.log((autoExec)(1,2));

const autoExec2 = (a: number, b: number): number => {
  return a + b;
}

console.log((autoExec2)(1,2));

const result1 = (function(a: number, b: number) {
  return a + b;
})(1,2);

console.log(result1);

const result2 = ((a: number, b: number): number => {
  return a + b;
})(1,2);

console.log(result2);

// anonymous functions
const userNames: Array<string> = [
  'arlie_209',
  'coral21',
  'codegh0st',
  'diegodisant',
];

userNames.forEach(function(name: string) {
  console.log(name.toUpperCase());
});

userNames.forEach((name: string) => {
  console.log(name.toUpperCase());
});

const mapperFunction = function(name: string) {
  console.log(name.toUpperCase());
};

userNames.forEach(mapperFunction);
