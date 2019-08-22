// ****** ********

const array = [1, 2, 3];

// old syntax
const arrRes = Math.max.apply(Math, array);
console.log(arrRes);

// new syntax
const rest = Math.max(...array);
console.log(rest);

// ****** *******
const arrFirst = [5, 6, 7];
const arrSecond = [8, 9, 10];

const arrAll = Math.max(41, ...arrFirst, ...arrSecond, 10);
console.log(arrAll);

// ****** ******
const shallowCopy = [...arrFirst];
console.log(shallowCopy);

