function disemVowel(str){
    sentence = ''

    for (let i = 0; i < str.length; i++){
        if('a,e,i,o,u'.includes(str[i].toLowerCase())) continue
        sentence += str[i]
    }
    return sentence
}

function disemvowelRegex (str){
    return str.match(/[^aeiou]/gi).join('')
}

function disemvowelRegex2 (str){
    return str.replace(/[aeiou]/gi, '')
}

console.log(disemVowel("This website is for losers LOL!"))
console.log(disemvowelRegex("This website is for losers LOL!"))
console.log(disemvowelRegex2("Input"))