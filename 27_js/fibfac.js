function fac(n) {
  if (n === 0) {
    return 1;
  }
  else {
    return n * fac(n - 1);
  }
}

function fibHelper(n, a, b) {
  if (n === 0) {
    return a;
  }
  else {
    return fibHelper(n - 1, b, a + b);
  }
}

function fib(n) {
  return fibHelper(n, 0, 1);
}
