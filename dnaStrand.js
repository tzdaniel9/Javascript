
function dnaStrand(dna) {
    const complements = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }

    return dna.split('').map(result => complements[result]).join('')
}

function dnaStrandCase(dna) {
    let result = ''
    for (let i = 0; i < dna.length; i++) {
        switch (dna[i]) {
            case 'A':
                result += 'T'
                break
            case 'T':
                result += 'A'
                break
            case 'C':
                result += 'G'
                break
            case 'G':
                result += 'C'
                break
        }
    }
    return result
}

const pairs = {
    'A': 'T',
    'T': 'A',
    'C': 'G',
    'G': 'C'
}

const dnaStrandRegex = dna => dna.replace(/./g, c => pairs[c])

function dnaStrandIf(dna) {
    let res = ''
    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'A') {
            res += 'T'
        } else if (dna[i] === 'T') {
            res += 'A'
        } else if (dna[i] === 'C') {
            res += 'G'
        } else if (dna[i] === 'G') {
            res += 'C'
        } else {
            res += dna[i]
        }
    }
    return res
}

console.log(dnaStrand('FTAACGLB'))
console.log(dnaStrand('TTTT'))

console.log(dnaStrandCase('FTAACGLB'))
console.log(dnaStrandCase('TTTT'))

console.log(dnaStrandRegex('TAACG'))
console.log(dnaStrandRegex('TTTT'))

console.log(dnaStrandIf('TAACG'))
console.log(dnaStrandIf('TTTT'))