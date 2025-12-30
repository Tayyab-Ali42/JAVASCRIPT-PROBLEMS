// PROBLEM 1 Tile Teamwork Tactics
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
let possibleBonus = (a, b) => {
    let distance = b - a
    if (distance >= 1 && distance <= 6) return true
    return false
}
// console.log(possibleBonus(3, 7))// ➞ true
// console.log(possibleBonus(1, 9))// ➞ false
// console.log(possibleBonus(5, 3))// ➞ false


// PROBLEM 2  Integer in Range?
// Create a function that validates whether a number n is within the bounds of lower and upper.Return false if n is not an integer.

// The term "within bounds" means a number is considered equal or greater than a lower bound and lesser(but not equal) to an upper bound, (see example #2).
// Bounds will be always given as integers.
let intWithinBounds = (num, lowerB, upperB) => {
    if (!Number.isInteger(num)) return false
    return num >= lowerB && num < upperB
    // return false
}

console.log(intWithinBounds(3, 1, 9))// ➞ true
console.log(intWithinBounds(6, 1, 6))// ➞ false
console.log(intWithinBounds(4.5, 3, 8))// ➞ false


// PROBLEM 3 Oddish vs. Evenish

// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

let oddishOrEvenish = (num) => {
    let convertNumArray = String(num).split('')
    let result = convertNumArray.reduce((acc, crValue) => acc + Number(crValue), 0)
    return result % 2 === 0 ? 'Evenish' : 'Oddish'
}

console.log(oddishOrEvenish(43)) // ➞ "Oddish"
console.log(oddishOrEvenish(373))  // ➞ "Oddish"
console.log(oddishOrEvenish(4433))  // ➞ "Evenish"

// PROBLEM 4 Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

let isPositiveDominant = (arr) => {
    // let positiveValue = []
    // let negativeValue = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (!negativeValue.includes(arr[i]) && arr[i] < 0) {
    //         negativeValue.push(arr[i])
    //     } else if (!positiveValue.includes(arr[i]) && arr[i] >= 0) {
    //         positiveValue.push(arr[i])
    //     }
    // }

    let positives = new Set(arr.filter(n => n >= 0))
    let negatives = new Set(arr.filter(n => n < 0))

    return positives.size > negatives.size
}

// console.log(isPositiveDominant([5, 99, 832, -3, -4]))// ➞ true
// console.log(isPositiveDominant([5, 0]))// ➞ true
// console.log(isPositiveDominant([0, -4, -1]))// ➞ false


// PROBLEM 5 Pandigital Numbers

// A pandigital number contains all digits(0 - 9) at least once.Write a function that takes an integer, returning true if the integer is pandigital, and false otherwise.

let isPandigital = (num) => {
    let uniqueDigit = new Set([...String(num)])
    return uniqueDigit.size === 10
}

console.log(isPandigital(98140723568910))// ➞ true
console.log(isPandigital(90864523148909))// ➞ false
// console.log(isPandigital(112233445566778899))// ➞ false
