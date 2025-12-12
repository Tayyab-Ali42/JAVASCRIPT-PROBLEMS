// OBJECTS PROBLEMS


// PROBLEM 1  Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(obj) {
    return Object.entries(obj)
}

console.log(toArray({ a: 1, b: 2 })) // ➞[["a", 1], ["b", 2]] 
console.log(toArray({ shrimp: 15, tots: 12 })) // ➞[["shrimp", 15], ["tots", 12]]
console.log(toArray({})) // ➞[]



// PROBLEM 2 Calculate the Total Price of Groceries
// Create a function that takes an array of objects(groceries) which calculates the total price and returns it as a number.A grocery object has a product, a quantity and a price, for example:


function getTotalPrice(array) {
    let TotalPrice = 0
    array.forEach((item) => {
        TotalPrice += item.quantity * item.price
    })

    return TotalPrice

}

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 }
]))// ➞ 1.5

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Cereals", quantity: 1, price: 2.50 }
]))// ➞ 4

console.log(getTotalPrice([
    { product: "Milk", quantity: 3, price: 1.50 }
]))// ➞ 4.5

console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
]))// ➞ 10.4