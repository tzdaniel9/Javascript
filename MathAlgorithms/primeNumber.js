//Problem - Given a natural number 'n, determine if the number is prime or not

// A prime number is a natural number gretaer than 1 that is not a product of two smaller natural number eg 5
// isPrime(5) = true (1 * 5 or 5 * 1)
// isPrime(4) = false (1 * 4 or 2 * 2 or 4 * 1)

function isPrime(number){
    if (number < 2) return false
    for(let i = 2; i < number; i++){
        if(number % 2 === 0) {
            return false
        }
    }
    return true
}

console.log(isPrime(1))
console.log(isPrime(4))
console.log(isPrime(7))

// Big O = O(n)

function primeNumber(number){
    if (number < 2) return false
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % 2 === 0) {
            return false
        }
    }
    return true
}

console.log(primeNumber(1))
console.log(primeNumber(4))
console.log(primeNumber(7))

// Big O = O(sqrt(n))