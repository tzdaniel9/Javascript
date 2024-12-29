function descendingOrder(n) {
    return parseInt((n + '').split('').sort().reverse().join(''))
}

const descendingOrderArrow = n => Number(String(n).split('').sort((a, b) => b - a).join(''))


console.log(descendingOrder(179264))
console.log(descendingOrderArrow(179264))