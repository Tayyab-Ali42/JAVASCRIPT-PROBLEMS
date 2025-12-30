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


