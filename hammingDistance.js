function hammingDistance(x, y){
    if(x.length !== y.length){
        console.log('Strings must be of the same length')
    }

    let distance = 0

    for(let i = 0; i < x.length; i++){
        if(x[i] !== y[i]){
            distance++
        }
    }
    return distance
}

console.log(hammingDistance("hello", "h3ll0"))