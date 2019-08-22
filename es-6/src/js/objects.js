// Objects
const x = 50;
const y = 60;

// old syntax
const point = {
  x: y,
  y: y,
}
console.log(point);

// new syntax
let poinFirst = { 
  x, y,
}
console.log(poinFirst);

// ****** ******
const prefix = 'lololo';
const data = {
  [prefix + ' name']: "Anna",
  [prefix + ' age']: 33,
}
console.log(data);


// ****** ******
const defaults = {
  host: 'hostlocal',
  dBName: 'blog',
  user: 'admin',
};

const options = {
  user: 'ivan',
  password: 'top5'
};

Object.assign(defaults, options);
console.log(defaults);

const all = Object.assign({}, defaults, options);
console.log(all);

// ****** ******
const onePerson = {
  ava: 'mila',
  friends: ['anna', 'alena']
};

const shallowCopyPerson = Object.assign({}, onePerson);
console.log(shallowCopy);

