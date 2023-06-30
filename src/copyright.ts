// // original js code
// const year =document.getElementById('year');
// const thisYear =  new Date().getFullYear();
// year?.setAttribute('datetime',thisYear);
// year?.textContent = thisYear

//1st variation;
// let year: HTMLElement | null;
// year = document.getElementById("year");

// const thisYear = new Date().getFullYear().toString();

// if (year) {
//   year.setAttribute("datetime", thisYear);
//   year.textContent = thisYear;
// }

//or
//year?.setAttribut('datetime', thisYear)

// 2nd variation:

const year = document.getElementById("year") as HTMLSpanElement;

const thisYear: string = new Date().getFullYear().toString();

year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
