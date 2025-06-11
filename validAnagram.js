/**
 * An anagram is a word or phrase formed by rearranging the letters of a different word
 * or phrase, using all the original letters exactly once
 * Input: (s = 'anagram'), (t = 'nagaram'); ----->>>>> output: true
 * Input: (s = 'rat'), (t = 'car'); ----->>>>> output: false
 */ 

const isAnagram = ((s,t) => {
    if (s.length !== t.length) return false
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")

    return s === t
})

console.log(isAnagram('anagram', 'nagaram'))