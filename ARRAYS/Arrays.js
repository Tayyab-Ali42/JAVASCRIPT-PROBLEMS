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

// let countTrue = arr => arr.filter(word => word === true).length

// console.log(countTrue([true, false, false, true, false]))
// console.log(countTrue([false, false, false, false]))
// console.log(countTrue([]))



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