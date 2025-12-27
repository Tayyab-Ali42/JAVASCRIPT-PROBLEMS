// PROBLEM 1 PROBLEM 3 Fix the Error: Value vs. Reference Types

// Create a function that returns true if two arrays contain identical values, and false otherwise.
// To solve this question, your friend writes the following code:

// YOUR FRIEND CODE
// function checkEquals(arr1, arr2) {
// if (arr1 === arr2) {
//     return true
// } else {
//     return false
// }
//     }

// YOUR CODE
function checkEquals(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

// console.log(checkEquals([1, 2], [1, 3]))
// console.log(checkEquals([1, 2], [1, 2]))
// console.log(checkEquals([4, 5, 6], [4, 5, 6]))
// console.log(checkEquals([4, 7, 6], [4, 5, 6]))
// console.log(checkEquals([4, 7, 6], [4, 6, 7]))

// PROBLEM 2
// Fix the Error: Flattening an Array


// function flatten(arr) {
//     let flatenArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             arr[i].forEach((item) => {
//                 flatenArr.push(item)
//             })
//         }
//     }
//     return flatenArr;
// }

function flatten(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2 = arr2.concat(arr[i]);
    }
    return arr2;
}

// console.log(flatten([[1, 2], [3, 4]]))
// Expected: [1, 2, 3, 4]
// console.log(flatten([["a", "b"], ["c", "d"]]))
// Expected: ["a", "b", "c", "d"]
// console.log(flatten([[true, false], [false, false]]))
// Expected: [true, false, false, false]



// PROBLEM 3 Clone an Array

let clone = (arr) => {
    return [...arr, [...arr]]
}


console.log(clone([1, 1])) // ➞ [1, 1, [1, 1]]
console.log(clone([1, 2, 3]))// ➞ [1, 2, 3, [1, 2, 3]]
console.log(clone(["x", "y"]))// ➞ ["x", "y", ["x", "y"]]

// PROBLEM 4 Fix the Code: Un-Mutating an Array
// Your friend is trying to write a function to accomplish the following transformations:
// Each time x is called, the following results are shown:

// change(x, 0)  // [3, 3, 3, 3, 3, 3, 3]
// change(x, 1)  // [3, 2, 2, 2, 2, 2, 3]
// change(x, 2)  // [3, 2, 1, 1, 1, 2, 3]
// change(x, 3)  // [3, 2, 1, 0, 1, 2, 3]

// Note: The change() function should not mutate the original array.After each call to the function, the original x should still equal[3, 3, 3, 3, 3, 3, 3].
// He comes up with the following code:

// BUGS CODE

// function change(x, times) {
//   for(let i = 0; i < x.length; i++) {
//     let j = 1; 
//     while (j <= times) {
//       if (i >= j && i < x.length-j) {
//         x[i]--; 
//       }
//       j++; 
//     }
//   }
//   return x; 
// }
// Oops! The code appears to mutate the original array. Fix this incorrect code so that the function no longer mutates the original array.

// FIXED CODE BY CLONING IT
function change(x, times) {
    let cloneArr = [...x]
    for (let i = 0; i < cloneArr.length; i++) {
        let j = 1;
        while (j <= times) {
            if (i >= j && i < cloneArr.length - j) {
                cloneArr[i]--;
            }
            j++;
        }
    }


    return cloneArr;
}

console.log(change([3, 3, 3, 3, 3], 1))
console.log(change([3, 3, 3, 3, 3], 2))
console.log(change([3, 3, 3, 3, 3], 0))

// PROBLEM 5 

function hasValidPrice(product) {
    if (!product || !('price' in product)) {
        return false
    }
    const price = product.price

    if (typeof price === 'number' && price >= 0) {
        return true
    }
    return false

}

console.log(hasValidPrice({ "product": "Milk", price: 1.50 }))// ➞ true
console.log(hasValidPrice({ "product": "Cheese", price: -1 }))// ➞ false
console.log(hasValidPrice({ "product": "Eggs", price: 0 }))// ➞ true
console.log(hasValidPrice({ "product": "Cereals", price: "3.0" }))// ➞ false
console.log(hasValidPrice())// ➞ false


// PROBLEM 6 Sum of Digits of a Positive Integer
// An instructor has given her student an assignment to calculate the sum of the digits of a positive integer using recursion.The student came up with the solution but the solution does not seem to be correct. Help her fix the error.

// BUG CODE 

// function sumDigit(positiveInteger) {
// postiveInteger.reduce((acc, v) => acc - v, 0);
// }

// FIXED CODE
function sumDigit(postiveInteger) {
    return Array.from(String(postiveInteger), Number).reduce((acc, item) => acc + item, 0)
}
console.log(sumDigit(111))// ➞ 3
console.log(sumDigit(222))// ➞ 6
console.log(sumDigit(333))// ➞ 9

// PROBLEM 7 ES6: Destructuring Objects VI
// BUG CODE
// function shirtSize({size = "big"}) {
//     return size
//   }

shirtSize()  // error: Cannot destructure property "size" of "undefined" or "null"
//   The preceding code produces an error because no object was passed to the function. Fix the function to return the default size, even if nothing is passed to the function. Don't remove the {size = "big"} object in the parameter and don't change the return statement.

// FIXED CODE
function shirtSize({ size = 'Big' } = {}) {
    return size
}

console.log(shirtSize())



// PROBLEM 8 Fix The Error: Array Reduce
// The instructor assigns Boron two tasks (regarding the use of reduce() method after lecturing in array methods).

// The first task is to create a function calculateSum() that takes a string and returns the sum of the ASCII values of all the characters in the string using reduce().
// The second task is to create a function reverseString() that reverses and returns an input string using reduce().
// While solving the problem, Boron has encountered errors. Help him fix the errors.

let calculateSum = (str) => {
    return str.split('').reduce((acc, _, index) => acc + str.charCodeAt(index), 0)
}

console.log(calculateSum('lime'))
console.log(calculateSum('a'))



let reverseString = (str) => {
    return str.split('').reduce((acc, crntvalue) => crntvalue + acc)
}
console.log(reverseString('hello'))
