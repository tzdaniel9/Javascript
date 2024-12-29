function jadenCasing() {
  const mySentence = "How can mirrors be real if our eyes aren't real"
  const words = mySentence.split(' ')

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substring(1)
  }

  return words.join(' ')
}

function jadenCasingUsingMap() {
  const mySentence = "How can mirrors be real if our eyes aren't real"
  const words = mySentence.split(' ')

  words.map((word) => {
    return word[0].toUpperCase() + word.substring(1)
  })
  
  return words.join(' ')

  
}

function jadenCasingRegex(){
  const mySentence = "How can mirrors be real if our eyes aren't real"
  const finalSentence = mySentence.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
  return finalSentence
}

console.log(jadenCasing())
console.log(jadenCasingUsingMap())
console.log(jadenCasingRegex())
