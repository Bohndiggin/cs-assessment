function nada(arr) { //runtime n^2 sad
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return true
            } else {
                continue
            }
        }        
    }
    return false
}

console.log(nada([1, 2, 3]))


function noRepeats(str) { //runtime n not so bad
    let strArr = str.split('')
    let dupes = strArr.filter((item, index) => strArr.indexOf(item) !== index) // looks for first instance and if it has dupes (meaning that it's on another index and the first index is different) it will add to array because it's in there twice/more
    if (dupes.length) {
        return false
    } else {
        return true
    }
}

console.log(noRepeats('Monday'))

function allDaAlphabet(str) { // runtime n nice
    let strArr = str.toLowerCase().split('')
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let alphaArr = alphabet.split('')
    for (let i = 0; i < alphaArr.length; i++) {
        if (strArr.indexOf(alphaArr[i]) === -1) {
            return false
        } else {
            continue
        }
    }
    return true
}

function longBoi(arr) { // runtime n. cool.
    let longest = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length
        }
    }
    return longest
}