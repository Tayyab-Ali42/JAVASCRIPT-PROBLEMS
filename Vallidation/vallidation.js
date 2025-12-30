// PROBLEM 1 Tile Teamwork Tactics
// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die. If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Can you reach your friend's tile number in the next roll? Create a function that takes your position a and your friend's position b and returns a boolean representation of whether it's possible to earn a bonus on any die roll.
let possibleBonus = (a, b) => {
    let distance = b - a
    if (distance >= 1 && distance <= 6) return true
    return false
}
console.log(possibleBonus(3, 7))// ➞ true
console.log(possibleBonus(1, 9))// ➞ false
console.log(possibleBonus(5, 3))// ➞ false