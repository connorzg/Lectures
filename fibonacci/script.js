fibonacci = [0, 1];

function fib(n) {
  for (var i = 1; i < n; i++) {
    fibonacci[i + 1] = fibonacci[i] + fibonacci[i - 1]
  }
  return fibonacci[n - 1];
}
