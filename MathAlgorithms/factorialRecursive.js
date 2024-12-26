// Problem - Give an integer 'n', find the factorial of that integer
// The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or qual to 'n'
// Factgorial of zero is 1
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

// 5! = 5*4*3*2*1   5*4!
// 4! = 4*3*2*1     4*3!            n!=n*(n-1)!
// 3! = 3*2*1       3*2!
// 2! = 2*1         2*1!
// 1! = 1*1         1*0!
// 0! = 1

function recursiveFactorial(number){
if ( number === 0) {
    return 1
}
    console.log(number)
    return number * recursiveFactorial (number - 1)
}

console.log(recursiveFactorial(0))
console.log(recursiveFactorial(1))
console.log(recursiveFactorial(5))

//Big O = O(n)