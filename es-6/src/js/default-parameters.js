// ****** ******
// old syntax
function fetchOrders(count, start) {
  if (count === undefined) {
    count = 10;
  }

  if (start === undefined) {
    start = 0;
  }

  console.log('Getting', count, 'orders starting from', start);
}
fetchOrders();

// new syntax
function fetchOrdersNew(count = 10, start = 0) {
  console.log('Getting', count, 'orders starting from', start);
}
fetchOrdersNew();
fetchOrdersNew(15, 30);
fetchOrdersNew(5);
fetchOrdersNew(undefined, 50);
fetchOrdersNew(true);


// ****** ******
function findProducts(opts = { minPrice: 10, minPrice: 7 }) {
  console.log(opts);
}
findProducts({});

