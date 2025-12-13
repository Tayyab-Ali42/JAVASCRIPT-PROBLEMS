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
    return getTotalPrice = (items) =>
        items.reduce((sum, item) => sum + item.quantity * item.price, 0);
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


// PROBLEM 3  Frequency Distribution
// Create a function that returns the frequency distribution of an array.This function should return an object, where the keys are the unique elements and the values are the frequency in which those elements occur.


function getFrequencies(arr) {
    if (!arr.length) return {}
    let newObj = {}
    for (let i = 0; i < arr.length; i++) {
        if (!Object.hasOwn(newObj, arr[i])) {
            newObj[`${arr[i]}`] = 1
        } else {
            newObj[`${arr[i]}`] += 1
        }
    }
    return newObj
}

console.log(getFrequencies(["A", "B", "A", "A", "A"]))// ➞ { A: 4, B: 1 }
console.log(getFrequencies([1, 2, 3, 3, 2]))// ➞ { "1": 1, "2": 2, "3": 2 }
console.log(getFrequencies([true, false, true, false, false]))// ➞ { true: 2, false: 3 }
console.log(getFrequencies([]))// ➞ { }



// PROBLEM 4 The Frugal Gentleman
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine.However, he has little knowledge of how to choose a good bottle.Being a very frugal gentleman(yet disliking looking like a cheapskate), he decides to use a very simple rule.In any selection of two or more wines, he will always buy the second - cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party.If given an empty array, return null.If given an array of only one, Atticus will buy that wine.


function chosenWine(wines) {
    if (!wines.length) return null
    if (wines.length == 1) return wines[0].name

    wines.sort((a, b) => a.price - b.price)

    return wines[1].name

}



console.log(chosenWine([
    { name: "Wine A", price: 8.99 },
    { name: "Wine 32", price: 13.99 },
    { name: "Wine 9", price: 10.99 }
]))

console.log(chosenWine([{ name: "Wine A", price: 8.99 }]))// ➞ "Wine A"
console.log(chosenWine([]))// ➞ null