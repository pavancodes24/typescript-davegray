const usersArray1 = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
];

interface usingId {
  id: number;
}
let processingArry = <T extends usingId, k extends keyof T>(
  users: T[],
  key: k
): T[k][] => {
  return users.map((user) => user[key]);
};

console.log(processingArry(usersArray1, "website"));

//////////////////////////////////////

class StateOjb<T> {
  constructor(private data: T) {
    this.data = data;
  }
  get state():T {
    return this.data
  }

  set State(value:T){
     this.data = value
  }
}


const ott = new StateOjb('John')
console.log(ott.state)



