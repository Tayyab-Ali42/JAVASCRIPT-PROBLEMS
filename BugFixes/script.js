// PROBLEM 1
function checkEquals(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false
    }
    return true
}

console.log(checkEquals([1, 2], [1, 3]))
console.log(checkEquals([1, 2], [1, 2]))
console.log(checkEquals([4, 5, 6], [4, 5, 6]))
console.log(checkEquals([4, 7, 6], [4, 5, 6]))
console.log(checkEquals([4, 7, 6], [4, 6, 7]))

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

console.log(flatten([[1, 2], [3, 4]]))
// Expected: [1, 2, 3, 4]

console.log(flatten([["a", "b"], ["c", "d"]]))
// Expected: ["a", "b", "c", "d"]

console.log(flatten([[true, false], [false, false]]))
// Expected: [true, false, false, false]

