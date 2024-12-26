// Given a number 'n' find the nth element of the fibonacci sequence
// I Mathematics, the fobonnaci sequence is a sequence in which each number is the sum of the two preceding ones.
// the first two numbers in the sequence are 0 and 1. (0,1,1,2,3,5,8...)

// Tips for recursive solutions
// Figure out how to break down the problem into smaller versions of the same problem
// Identify the base case for recursion



function recuresiveFibonacci(number){
    if (number < 2){
        return number
    }
    console.log(number)
    return recuresiveFibonacci(number - 1) + recuresiveFibonacci(number - 2)
}

console.log(recuresiveFibonacci(7))
// console.log(recuresiveFibonacci(1))
// console.log(recuresiveFibonacci(6))


            //                     7
            //         6                       5
            //     4         5           3             4
            // 2       3   4    3      1   2       2       3

//Big O = O(2^n)  recursive