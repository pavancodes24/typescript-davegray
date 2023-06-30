"use strict";
// utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "compsci123",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded = updateAssignment(assign1, { grade: 95 });
//Required and Readonly
// required require all the properties of the assignment
const recordAssignment = (assign) => {
    //send to database
    return assign;
};
//Readonly -> cant override any property
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true }));
//Record type
const hexcolorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "B",
    Kelly: "U",
};
const gradeData = {
    Sara: { assign1: 95, assign2: 45 },
    Kelly: { assign1: 54, assign2: 14 },
};
const score = {
    studentId: "testing",
    grade: 99,
};
const preview = {
    studentId: "testing",
    title: "final project",
};
const createNewAssign = (title, points) => {
    return { title, points };
};
//problem -> if changes the types we have to change the function
const createNewAssign2 = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign2("Utitlity types", 100);
console.log(tsAssign);
const assingArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assingArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
        return res.json();
    })
        .catch((err) => {
        if (err) {
            if (err instanceof Error) {
                console.log(err.message);
            }
        }
    });
    return data;
});
fetchUsers().then(res => console.log(res));
