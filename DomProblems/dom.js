
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
    if (password.type === 'password') {
        password.type = 'search'
        toggle.textContent = 'Hide'
    } else {
        password.type = 'password'
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




// DOM Problem #6(Medium → Tricky)
// Task: Click Outside to Close Modal

// Requirements
// Clicking Open Modal → opens modal
// Clicking outside .content → closes modal
// Clicking inside .content → does nothing

let openModal = document.getElementById('open')
let modal = document.getElementById('modal')


openModal.addEventListener('click', () => {
    modal.classList.toggle('hidden')
})
modal.addEventListener('click', (e) => {
    if (e.target !== modal) return
    modal.classList.add('hidden')
})


// DOM Problem #7 (Medium → Advanced)
// Task: Dropdown Menu (Click Outside to Close)

// Requirements
// Clicking Menu toggles dropdown
// Clicking outside the dropdown & button closes it
// Clicking inside dropdown does NOT close it

let dropDownToggle = document.getElementById('dropdown_toggle')
let dropDown = document.getElementById('dropdown')

dropDownToggle.addEventListener('click', (e) => {
    e.stopPropagation()
    dropDown.classList.toggle('hidden')
})
document.addEventListener('click', (e) => {
    if (!dropDown.contains(e.target) && e.target !== dropDownToggle) {
        dropDown.classList.add('hidden');
    }

})
