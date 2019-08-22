// ****** *******
const person = {
  firstName: 'Peter',
  lastName: 'Ivanov',
  age: 30,
}

// old syntax
let firstNam = person.firstName;
let lastNam = person.lastName;
console.log(firstNam, lastNam);

// new syntax
let { firstName, lastName } = person;
console.log(firstName, lastName);

// ****** ******
const personToo = {
  name: {
    first: 'Anna',
    last: 'Petrova',
  },
  age: 32,
}

const { name: {first, last} } = personToo;
console.log(first, last);

// ****** ******
const personFeature = {
  avatar: {
    firstP: 'Anna',
    lastP: 'Petrova',
  },
  age: 33,
}

let { avatar: {firstP = nameFirst, lastP = nameLast} } = personFeature;
console.log(firstP, lastP);

const { role = 'user' } = person;
console.log(role);

const {permissions: { roles = 'users' } = {} } = personFeature;
console.log(roles);

// ****** ******
function connect({
  host = 'localhost',
  port = 2000,
  user = 'guest',
} = {} ) {
  console.log(user, port, host)
}
connect({ });
connect({ port: 1111 });
connect();

// Rest element
const dick = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
};
const { duck, ...otherAnimals } = dick;
console.log(duck);
console.log(otherAnimals);

