// Problem - Give an integer 'n', find the factorial of that integer
// The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less than or qual to 'n'
// Factgorial of zero is 1
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

function factorial(number){
let sum = 1
for(let i = 2; i <= number; i++) {
        sum *= i
    }
    return sum
}

console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(5))

//Big O = O(n)