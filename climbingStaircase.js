//  Problem - Given a staircase of 'n' steps, count the number of distinct ways to climb to the top.You either climb 1 step or 2 steps at a time

// n=1, climbingStaircase(1) = 1            | (1)
// n=2, climbingStaircase(2) = 2            | (1,1) and (2)
// n=3, climbingStaircase(3) = 3            | (1,1,1), (1,2) and (2,1)
// n=4, climbingStaircase(4) = 4            | (1,1,1,1), (1,1,2), (1,2,1), (2,1,1) and (2,2)

// Climbing staircase idea
// At any given time, you can climb either 1 step or 2 steps
// If you have to climb to step 'n', we can only climb from step 'n-1' or 'n-2'
// calculate the ways we can climb to 'n-1' and 'n-2' steps and add the two
// climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)

function climbingStairCase(num) {
    const result = [1, 2]
    for (let i = 2; i <= num; i++) {
        result[i] = result[i - 1] + result[i - 2]
    }
    return result[num - 1]
}

console.log(climbingStairCase(4))
console.log(climbingStairCase(7))

// Big O = O(n)
//same as fibonacci

// hacker Rank Staircase 
function staircase(n){
    let str = ''
    let len = n
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= n; j++){
            if( j < len){
                str += ' '
            } else {
                str += '#'
            }
        }
        len--
        str += '\n'
    }
    console.log(str)
}

staircase(4)
staircase(7)
