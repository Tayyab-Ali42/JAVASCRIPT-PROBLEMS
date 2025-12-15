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
    let max = 0
    for (const key in earnings) {
        if (earnings[key] > max) {
            max = earnings[key]
        }
    }

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




// DOM PROBLEMS
// DOM Problem #1 (Medium)
// Task: Toggle Highlight on Click

// You are given multiple <li> items inside a <ul>.
// When a user clicks on any <li>:
// That <li> should get a CSS class called active
// Any other <li> that already has active should remove it
// Clicking the already active item should keep it active (no toggle off)

const menu = document.getElementById('menu');
menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const activeItem = menu.querySelector('.active');
        if (activeItem) {
            activeItem.classList.remove('active');
        }
        e.target.classList.add('active');
    }
});


// DOM Problem #2(Medium)
// Task: Disable Button After 3 Clicks

// Requirements

// Each click increases a counter
// Show click count inside <p>
// After 3 clicks:
// Disable the button
// Change button text to "Disabled"s

const btn = document.getElementById('btn');
const count = document.getElementById('count');

let clicks = 0;

btn.addEventListener('click', () => {
    clicks++;
    count.textContent = clicks;

    if (clicks === 3) {
        btn.disabled = true;
        btn.textContent = 'Disabled';
    }
});



// DOM Problem #3 (Medium)
// Task: Show/Hide Password

// Requirements
// Clicking the button toggles input type between password and text
// Button text should change:
// Show → Hide
// Hide → Show
// Use JavaScript only

let password = document.getElementById('password')
let toggle = document.getElementById('toggle')


toggle.addEventListener('click', (e) => {
    // e.target.textContent == "Show" ? 'Hide' : 'Show'
    if (password.getAttribute('type') === 'password') {
        password.setAttribute("type", "search")
        toggle.textContent = 'Hide'
    } else {
        password.setAttribute("type", "password")
        toggle.textContent = 'Show'

    }
})

// DOM Problem #4 (Medium)
// Task: Live Character Counter

// Requirements

// Max length = 100 characters
// Update character count while typing
// If user exceeds 100:
// Trim extra characters
// Keep count at 100

const message = document.getElementById('message');
const info = document.getElementById('info');

message.addEventListener('input', (e) => {
    let value = e.target.value;

    if (value.length > 100) {
        value = value.substring(0, 100);
        message.value = value;
    }

    info.textContent = `${value.length} / 100`;
});



// DOM Problem #5 (Medium)
// Task: Accordion (Single Open Section)

// Requirements

// Clicking a < h3 > toggles its < p >
// Only one section open at a time
// Use event delegation
// Hide others when one 

const accordion = document.querySelector('.accordion');
const paras = document.querySelectorAll('.para');

accordion.addEventListener('click', (e) => {
    if (e.target.tagName !== 'H3') return;

    const currentPara = e.target.nextElementSibling;
    const isOpen = currentPara.style.display === 'block';

    // Close all
    paras.forEach(p => {
        p.style.display = 'none';
    });

    // Toggle
    if (!isOpen) {
        currentPara.style.display = 'block';
    }
});
