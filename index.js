const assert = require('assert');
// const coinSum = require('./coinSum.js')
const fibDigits = require('./fibDigits.js')


// Multiples of 3 and 5
function euler1(n) {
    let x = 0;
    let sum = 0;

    while (x < n) {

        if (x%3 === 0 || x%5 === 0) {
            sum += x;
        }
        x++;
    }

    return sum;
}

assert.equal(euler1(10), 23)

assert.equal(euler1(100),2318)

assert.equal(euler1(1000),233168)

console.info('Tests Passed - Euler1')


function evenFib(max) {
    let x = 1
    let evens = 0

    const fib = function(value, previous = 1) {
        if (value >= max) return

        const next = value + previous

        if (next % 2 === 0) { evens += next }

        return  fib(next, value)
    }

    fib(1)

    return evens
}

assert.equal(evenFib(10), 10)
assert.equal(evenFib(100), 188)
assert.equal(evenFib(4000000), 4613732)


console.info('Tests Passed - evenFib')


// assert.equal(coinSum(), [])

assert.equal(fibDigits(2), 7)
assert.equal(fibDigits(3), 12)
assert.equal(fibDigits(4), 17)
assert.equal(fibDigits(5), 21)
assert.equal(fibDigits(10), 45)
assert.equal(fibDigits(20), 93)
assert.equal(fibDigits(22), 103)
assert.equal(fibDigits(21), 98)
assert.equal(fibDigits(100), 476)
assert.equal(fibDigits(1000), 1477)

console.info('Tests Passed - fibDigits')


console.info('🎉 All Tests Pass 🎉')
