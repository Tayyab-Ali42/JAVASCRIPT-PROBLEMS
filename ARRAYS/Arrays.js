// PROBLEM 1 Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array.Otherwise, return "there is no 7 in the array".

let sevenBoom = (arr) => {
    let hasSeven = arr.some((num) => num.toString().includes('7'))
    return hasSeven ? 'Boom' : 'There is no 7 in the item'
}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]))
console.log(sevenBoom([8, 6, 33, 100]))
console.log(sevenBoom([2, 55, 60, 97, 86, 90]))


// PROBLEM 2 How Much is True?
// Create a function which returns the number of true values there are in an array.

let countTrue = arr => arr.filter(word => word === true).length

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))



// PROBLEM 3 According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash.You will write a function that receives an array and removes all falsey values.

let compact = arr => arr.filter(Boolean)

console.log(compact([true, false, false, true, false]))
console.log(compact([true, false, false, true, "Hello", "", undefined, NaN]))
console.log(compact([false, false, false, false]))
console.log(compact([]))


// PROBLEM 4 Create a function that concatenates n input arrays, where n is variable.

let concat = (...arrays) => arrays.flat()

concat([1, 2, 3], [4, 5], [6, 7])
concat([1], [2], [3], [4], [5], [6], [7])

console.log(concat([1, 2], [3, 4]))
console.log(concat([4, 4, 4, 4, 4]))
console.log(concat([1], [2], [3], [4], [5], [6], [7]))


// PROBLEM 5 Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
const changeEnough = (coins, price) => {
    const values = [25, 10, 5, 1] // cents

    const total = coins.reduce(
        (sum, count, i) => sum + count * values[i],
        0
    )

    return total >= price * 100
}
console.log(changeEnough([2, 100, 0, 0], 14.11))
console.log(changeEnough([10, 0, 0, 50], 3.85))


// * PROBLEM 6 Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.


let arrayOfMultiples = (num, length) => {
    return [...Array(length)].map((_, i) => num * (i + 1))
}

console.log(arrayOfMultiples(7, 5))
console.log(arrayOfMultiples(12, 10))