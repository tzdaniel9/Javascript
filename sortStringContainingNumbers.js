// Your order, please
function order(words) {
    return words.split(' ').sort((a, b) => getNumber(a) - getNumber(b)).join(' ')
}

function getNumber(str) {
    return str.match(/\d/)[0]
}


console.log(order("is2 Thi1s T4est 3a"))
console.log(order("4of Fo1r pe6ople g3ood th5e the2"))