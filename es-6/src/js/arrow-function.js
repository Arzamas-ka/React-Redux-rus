// ****** *******
// old syntax
function square(x) {
  return x * x;
}

// new sytnax
const sq = (x) => {
  return x * x;
}


// ****** *******
// old syntax
const arr = ['1', '2', '3', '4'];

const result = arr
  .map(function(el) {
    return parseInt(el);
  })
  .filter(function(el) {
    return el % 2;
  })
  .reduce(function(max, value) {
    return Math.max(max, value, 0);
  }, 0);

// new syntax
const res = arr
    .map((el) => parseInt(el))
    .filter((num => num % 2))
    .reduce((max, value) => Math.max(max, value, 0));
console.log(res);

// this
const greeter = {
  greet: function (name) {
    console.log('Hello', name);
  },

  greetAll: function (names) {
    names.forEach((name) => {
      this.greet(name); 
    });
  }
};
greeter.greetAll(['Anna', 'Ivan', 'Irina']);

