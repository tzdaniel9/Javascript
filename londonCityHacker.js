function londonCityHacker(journey) {
    let result = 0
    for (let i = 0; i < journey.length; i++) {
        if (typeof journey[i] == 'string') {
            result += 2.4
        } else {
            result += 1.5
            if (typeof journey[i + 1] == 'number') {
                i++
            }
        }
    }
    return '€' + result.toFixed(2)
}

console.log(londonCityHacker(['Picadilly', 56, 93, 243]))