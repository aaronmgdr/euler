
function numDigits(x) {
  return Math.max(Math.floor(Math.log10(Math.abs(x))), 0) + 1;
}

module.exports = function fibDigits(digits) {

  const fib = function(value, previous = 1, counter = 1) {
      counter++
      if (numDigits(value) >= digits) return counter

      const next = value + previous
      return  fib(next, value, counter)
  }

  return fib(1)
}
