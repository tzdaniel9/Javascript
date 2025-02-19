function pigLatin(word) {
    word = word.toLowerCase()

    if (/\d/.test(word)) {
        return null; // Return null if there's no valid alphabetic character
    }

    //Match if the word starts with a vowel
    if (word.match(/^[aeiou]/)) {
        return word + "way";  // If it starts with a vowel, append "way"
    } else {
        // Match the consonant cluster and the rest of the word
        return word.replace(/^([^aeiou]+)(.*)$/, (match, consonants, rest) => {
            return rest + consonants + "ay";  // For consonants, move cluster to end and add "ay"
        });
    }
}

function pigLatin2(word) {
    word = word.toLowerCase()

    if (/\d/.test(word)) {
        return null; // Return null if there's no valid alphabetic character
    }

    // Match if the word starts with a vowel
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    if (vowels.includes(word[0])) {
        return word + "way"; // For words starting with a vowel
    } else {
        // For words starting with a consonant or consonant cluster
        const firstVowelIndex = [...word].findIndex(char => vowels.includes(char));
        const consonantCluster = word.slice(0, firstVowelIndex);
        const restOfWord = word.slice(firstVowelIndex);
        return restOfWord + consonantCluster + "ay";
    }
}

function pigLatin3(word) {
    word = word.toLowerCase()

    if (/\d/.test(word)) {
        return null; // Return null if there's no valid alphabetic character
    }

    function isVowelFirstLetter() {
        var vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
        for (i = 0; i < vowels.length; i++) {
            if (vowels[i] === word[0]) {
                return true;
            }
        }
        return false;
    }

    // if word begins with vowel case
    if (isVowelFirstLetter()) {
        word += 'way';
    }
    else {
        // consonants to move to the end of wording
        var consonants = '';

        while (isVowelFirstLetter() === false) {
            consonants += word.slice(0, 1);
            // remove consonant from word beginning
            word = word.slice(1);
        }

        word += consonants + 'ay';
    }

    return word;
}

const pigLatin4 = string => /[^a-z]/i.test(string) ? null : string.toLowerCase().replace(/(^[^aeiou]*)(\w*$)/, (_, $1, $2) => $2 + ($1 || `w`) + `ay`);

console.log(pigLatin('1234spaghetti'))
console.log(pigLatin('Hello world !'))
console.log(pigLatin2('1234spaghetti'))
console.log(pigLatin2('Hello world !'))
console.log(pigLatin3('1234spaghetti'))
console.log(pigLatin3('Hello world !'))
// console.log(pigLatin4('1234spaghetti'))
// console.log(pigLatin4('Hello world !'))