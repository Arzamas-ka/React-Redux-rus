// ****** ******

max(1, 3);
max(1, 2, 3, 4, 5);

// old syntax
function max() {
  var num = Array.prototype.slice.call(arguments);
  console.log(num);
}

// new syntax
function min(a, b, ...numbers) {
  console.log(numbers);
}
min(1);
min(5, 6, 7);
min();
min(10, 20, 30, 40, 50);

