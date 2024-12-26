// Given a number 'n' find the nth element of the fibonacci sequence
// I Mathematics, the fobonnaci sequence is a sequence in which each number is the sum of the two preceding ones.
// the first two numbers in the sequence are 0 and 1. (0,1,1,2,3,5,8...)

function fibonacci(number){
    let sum = [0, 1]
    for (let i = 2; i < number; i++){
        sum [i] = sum[i -1] + sum[i - 2]
    }
    return sum
}

console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(7))

//Big O = O(n)