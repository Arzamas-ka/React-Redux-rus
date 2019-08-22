// ****** ******
const fib = [1, 1, 2, 3, 4, 5, 6];

const [a, b, c] = fib;
console.log(a, b, c);

let [k, , l] = fib
console.log(k, l);

// ****** ******
const line  = [[10, 20], [30, 40]];
const [ [m, n], [w, v] ] = line;
console.log(m, n, w, v);

// ****** ******
const people = ['sandra', 'anna', 'karl', 'bob'];

const [f, g, h = 'ivan', ...others] = people;
console.log(f, g, h);
console.log(others);

// ****** *******
const dickNew = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'squeak',
  hamster: 'squeak',
};

const resultNew = Object.entries(dickNew)
      .filter(([key, value]) => value === 'squeak')
      .map(([key]) => key);
console.log(resultNew);

// ****** *******
const shape = {
  type: 'segment',
  coordinates: {
    start: [10, 20],
    end: [30, 40]
  }
};
const { coordinates: { start: [startX, startY], end: [endX, endY] } } = shape;
console.log(startX, startY, endX, endY);

