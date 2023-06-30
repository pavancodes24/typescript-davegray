"use strict";
console.log("testing typescript");
let a = 2;
let b = 3;
let c = 5;
console.log(a / b);
let evp = {
    name: "harry styles",
    status: true,
    albums: [1, 2, 3, 4, "one direction"],
};
console.log(evp);
const logMessage = (msg) => {
    console.log(msg);
};
const sumAll = (a = 3, b, c = 2) => {
    return a + b + c;
};
logMessage(sumAll(undefined, 3));
let myName;
myName = "pavan";
let testing = ["1", 24];
let testingone = ["1", 1, "testing"];
let testingtwo = ["testing", true, 23456];
const obv = {
    name: "robert",
    status: false,
};
let strAr = ["name", "string", 1234, false];
var test;
(function (test) {
    test[test["U"] = 0] = "U";
    test[test["D"] = 1] = "D";
    test[test["C"] = 2] = "C";
    test[test["B"] = 3] = "B";
    test[test["A"] = 4] = "A";
})(test || (test = {}));
console.log(test.A);
const mathN = (a, b) => {
    return a + b;
};
console.log(mathN(3, 2));
//rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, next) => prev + next);
};
console.log(total(1, 2, 3, 4, 5));
const crateError = (msg) => {
    throw new Error(msg);
};
// logMessage(crateError("something went wrong test the code errors"));
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 10)
            break;
    }
};
infinite();
//conver to more or less specific
let aa = "hello";
//converting to type two
let bb = aa; //less specific
let cc = aa; //more speceifc
let d = "hello";
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 3, "concat");
//becarful typescript sees no problem - but a strint in returned
let nextVal = addOrConcat(2, 3, "add");
console.log(myVal, nextVal);
let testonon = 10;
//dom
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImag = document.getElementById('#img');
img.src;
myImg.src;
