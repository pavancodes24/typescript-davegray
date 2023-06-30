// class Coder {
//   name: string;
//   music: string;
//   age: number;
//   language: string;

//   constructor(name: string, music: string, age: number, language: string) {
//     this.name = name;
//     this.music = music;
//     this.age = age;
//     this.language = language;
//   }
// }

// const ot = new Coder('str','mus',12,'laghn')
// console.log(ot)

//instead of all the redundancy we can use visiblity modifiers
class Coder {
  secondLanguage!: string;

  constructor(
    public name: string,
    public music: string,
    private age: number,
    protected language: string = "Typescript"
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.language = language;
  }

  public getAge() {
    return `Hello. I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);

console.log(Dave.getAge());

//private can only access inside the class but not outside
// console.log(Dave.age)

//protected can access inside of class and subclasses but not outside
// console.log(Dave.language)

console.log(Dave.name);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.language}`;
  }
}

const Sara = new WebDev("Mac", "sara", "Lofi", 25);

console.log(Sara.getLang());

// console.log(Sara.age);
// console.log(Sara.language)
/////////////////////////////

//classes using interfaces

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist1 implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const page = new Guitarist1("Jimmy", "guitar");
console.log(page.play("strums"));

////////////////////////////////////////

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }

  public id: number;

  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const john = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(Peeps.count, Steve.id);

///////////////////////////////////////////////////
///getters setters

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }
  //readonly in get is special in js to get the data it is readonly
  public get data(): string[] {
    return this.dataState;
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else {
      throw new Error("param is not an array of strings");
    }
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led zep"];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"];
console.log(MyBands.data);

MyBands.data = ["val halen"];

console.log(MyBands.data)
