console.log("testing typescript");

let a: number = 2;
let b: number = 3;
let c: number = 5;

console.log(a / b);

type stringOrNumber = (string | number)[];

type Guitarist = {
  name?: string;
  status: boolean;
  albums: stringOrNumber;
};

let evp: Guitarist = {
  name: "harry styles",
  status: true,
  albums: [1, 2, 3, 4, "one direction"],
};

console.log(evp);

const logMessage = (msg: any): void => {
  console.log(msg);
};

const sumAll = (a: number = 3, b: number, c: number = 2): number => {
  return a + b + c;
};

logMessage(sumAll(undefined, 3));

let myName: "pavan" | "robert" | "peter";

myName = "pavan";

let testing: [string, number] = ["1", 24];

let testingone: (string | number)[] = ["1", 1, "testing"];

let testingtwo: Array<string | number | boolean> = ["testing", true, 23456];

interface testin {
  name: string;
  status: boolean;
}

const obv: testin = {
  name: "robert",
  status: false,
};

let strAr = ["name", "string", 1234, false];

enum test {
  U,
  D,
  C,
  B,
  A,
}

console.log(test.A);

type mathFunction = (a: number, b: number) => number;

const mathN: mathFunction = (a, b) => {
  return a + b;
};

console.log(mathN(3, 2));

//rest parameters
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, next) => prev + next);
};

console.log(total(1, 2, 3, 4, 5));

const crateError = (msg: any): never => {
  throw new Error(msg);
};

// logMessage(crateError("something went wrong test the code errors"));

const infinite = (): void => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 10) break;
  }
};

infinite();

//type casting or assertions
type one = string;
type two = string | number;
type three = "hello";

//conver to more or less specific
let aa: one = "hello";

//converting to type two
let bb = aa as two; //less specific

let cc = aa as three; //more speceifc

let d = <one>"hello";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 3, "concat") as string;

//becarful typescript sees no problem - but a strint in returned
let nextVal: number = addOrConcat(2, 3, "add") as number;

console.log(myVal, nextVal);

let testonon:string = (10 as unknown )as string


//dom
const img = document.querySelector('img')!
const myImg = document.getElementById('#img')! as HTMLImageElement

const nextImag = <HTMLImageElement>document.getElementById('#img')
 
img.src

myImg.src 