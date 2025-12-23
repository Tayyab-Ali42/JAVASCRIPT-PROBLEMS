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


// PROBLEM 5 Burglary Series (12): Get Vodka Bottle
// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.

// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.

function getRammsteinBottle(obj, number) {
    for (const elm in obj) {
        if (obj[elm] == number) {
            return elm
        }
    }
    return ""
}



console.log(getRammsteinBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 100)) //➞ "Rammstein A"
// number = 100

console.log(getRammsteinBottle({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 50)) //➞ "Rammstein B"
// number = 50

// PROBLEM 6 Return the Most Expensive Piece of Jewellery

// You go to a jewelry shop and try to find the most expensive piece of jewelry.You write down the name of each piece of jewelry and its price.

// Create a function that gets the name of the piece of jewelry with the highest price and returns "The most expensive one is the {name of jewelry piece}".

function mostExpensive(earnings) {
    let maxPrice = 0
    let maxItem = ""
    for (const item in earnings) {
        if (earnings[item] > maxPrice) {
            maxPrice = earnings[item]
            maxItem = item
        }
    }

    console.log(`The most expensive one is the ${maxItem}`)
}

mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650
}) //➞  "The most expensive one is the Pearl Necklace"

mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
}) // ➞ "The most expensive one is the Diamond Ring"




// * PROBLEM 7 Burglary Series (15): Number of Occurrences
// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.

// Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective. 


let countNumberOfOccurrences = (obj) => {
    let accurCheck = {}

    for (const key in obj) {
        let value = obj[key]
        accurCheck[value] = (accurCheck[value] || 0) + 1
    }

    console.log(accurCheck)
}


countNumberOfOccurrences({
    a: "moron",
    b: "scumbag",
    c: "moron",
    d: "idiot",
    e: "idiot"
})// ➞ { moron: 2, scumbag: 1, idiot: 2 }


countNumberOfOccurrences({
    a: "moron",
    b: "moron",
    c: "moron"
})// ➞ { moron: 3 }


countNumberOfOccurrences({
    a: "idiot",
    b: "scumbag"
})// ➞ { idiot: 1, scumbag: 1 }



// *  PROBLEM 8 Word to Bitstring to Boolean Array
// Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

// Locate the position of the letter in the English alphabet (from 1 to 26).
// Odd positions will be represented as 1 and even positions will be represented as 0.
// Convert the represented positions to boolean values, 1 for true and 0 for false.
// Store the conversions into an array.


function toBoolArray(str) {
    let result = []
    str = str.toLowerCase()
    for (const char of str) {
        if (char >= 'a' && char <= 'z') {
            let position = char.charCodeAt(0) - 96
            let bit = position % 2 === 1 ? 1 : 0;
            result.push(bit === 1);
        }
    }
    return result
}


console.log(toBoolArray("deep"))
console.log(toBoolArray("loves"))
console.log(toBoolArray("tesh"))


// * PROBLEM 9 Map the Letters in a String
// Given a word, create an object that stores the indexes of each letter in an array.

// Make sure the letters are the keys.
// Make sure the letters are symbols.
// Make sure the indexes are stored in an array and those arrays are values.


let mapLetters = (word) => {
    let result = {}
    word.split('').forEach((char, index) => {
        if (!result[char]) {
            result[char] = []
        }
        result[char].push(index)
    })
    return result
}

console.log(mapLetters("dodo"))
console.log(mapLetters("froggy"))
console.log(mapLetters("grapes"))

// PROBLEM 10 Burglary Series (16): Nested objects

// And who cursed the most in the fight between you and your spouse?
// Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most:

// If you, return "ME!"
// If your spouse, return "SPOUSE!"
// If a draw, return "DRAW!"


let determineWhoCursedTheMost = (obj) => {
    let meTotal = 0
    let spouseTotal = 0
    for (const elm in obj) {
        meTotal += obj[elm].me
        spouseTotal += obj[elm].spouse
    }
    if (spouseTotal < meTotal) return 'Me'
    if (spouseTotal > meTotal) return 'Spouse'
    return 'DRAW'
}

console.log(determineWhoCursedTheMost({
    round1: {
        me: 10,
        spouse: 5,
    },
    round2: {
        me: 5,
        spouse: 10,
    },
    round3: {
        me: 10,
        spouse: 10,
    },
})
)

console.log(determineWhoCursedTheMost({
    round1: {
        me: 40,
        spouse: 5,
    },
    round2: {
        me: 9,
        spouse: 10,
    },
    round3: {
        me: 9,
        spouse: 10,
    },
}))
console.log(determineWhoCursedTheMost({
    round1: {
        me: 10,
        spouse: 5,
    },
    round2: {
        me: 9,
        spouse: 44,
    },
    round3: {
        me: 10,
        spouse: 55,
    },
}))