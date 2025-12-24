// PROBLEM 1 Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array.Otherwise, return "there is no 7 in the array".

let sevenBoom = (arr) => {
    let hasSeven = arr.some((num) => num.toString().includes('7'))
    return hasSeven ? 'Boom' : 'There is no 7 in the item'
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([8, 6, 33, 100]))
console.log(sevenBoom([2, 55, 60, 97, 86, 90]))