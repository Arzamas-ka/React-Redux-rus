class Counter {
  count = 1;

  inc = () => {
    this.count++;
    console.log(this.count);
  }
}
const cnt = new Counter();
console.log(cnt.count);
cnt.inc();

