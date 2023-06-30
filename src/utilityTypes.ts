// utility types

//partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return { ...assign, ...propsToUpdate };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));

const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

//Required and Readonly
// required require all the properties of the assignment
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  //send to database
  return assign;
};

//Readonly -> cant override any property
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true,
};

recordAssignment({ ...assignGraded, verified: true });

//Record type
const hexcolorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<students, LetterGrades> = {
  Sara: "B",
  Kelly: "U",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<students, Grades> = {
  Sara: { assign1: 95, assign2: 45 },
  Kelly: { assign1: 54, assign2: 14 },
};

//Pick and Omit
type AssignmentResult = Pick<Assignment, "studentId" | "grade">;

const score: AssignmentResult = {
  studentId: "testing",
  grade: 99,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentId: "testing",
  title: "final project",
};

//Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">;

type highGrades = Extract<LetterGrades, "A" | "B">;

//NonNullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;

//Return type
type NewAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number): NewAssign => {
  return { title, points };
};

//problem -> if changes the types we have to change the function

const createNewAssign2 = (title: string, points: number) => {
  return { title, points };
};

type newAssign = ReturnType<typeof createNewAssign2>;

const tsAssign: newAssign = createNewAssign2("Utitlity types", 100);
console.log(tsAssign);

//Parameters
//derive a type from the function we use parameters type in ts.
type AssignParams = Parameters<typeof createNewAssign>;

const assingArgs: AssignParams = ["Generics", 100];

const tsAssign2: newAssign = createNewAssign(...assingArgs);
console.log(tsAssign2);

//Awaited utility type

//for promise


//interface
interface User {
  id: number,
  name : string,
  username: string,
  email: string

}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
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
    return data 
};


type FetchUserReturnType = Awaited<ReturnType<typeof fetchUsers>>

fetchUsers().then(res => console.log(res))
