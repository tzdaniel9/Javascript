// Problem - Give an integer 'n', find the summation of that integer
// summation(4) = 4+3+2+1 = 10
// summation(5) = 5+4+3+2+1 = 15

function summation(number) {
    let sum = 0
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return sum
}

console.log(summation(4)) //10
console.log(summation(7)) //15

//Big O = O(n)

const numbers = [0, 1, 2, 3, 4, 5, 6, 7]

//array.reduce
function reducer(previousValue, currentvalue) {
    return previousValue + currentvalue
}

const sum = numbers.reduce(reducer)

console.log(sum)

//array.reduceRight
function reducerRight(previousValue, currentvalue) {
    return previousValue + currentvalue
}

const add = numbers.reduceRight(reducerRight)

console.log(add)
