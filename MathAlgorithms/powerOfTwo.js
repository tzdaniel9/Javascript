// Problem - Give a positive integer 'n', determine if the number is a power of 2 or not
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2^x
// isPowerOfTwo(1) = true (2^0)
// isPowerOfTwo(2) = true (2^1)
// isPowerOfTwo(5) = false

function isPowerOfTwo(number) {
    if (number < 1) {
        return false
    }
    while (number > 1) {
        if (number % 2 !== 0) {
            return false
        }

        number /= 2
    }
    return true
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))

// Big O = O(logn)

function isPowerOfTwoBitwise(n) {
    if (n < 1) {
        return false
    }

    return (n & (n - 1)) === 0
}

console.log(isPowerOfTwoBitwise(1))
console.log(isPowerOfTwoBitwise(2))
console.log(isPowerOfTwoBitwise(5))

// Big O = O(1)