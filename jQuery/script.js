function sumOfPrimes(array) {
  var sum = 0
  function isPrime() {
    for (var i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
