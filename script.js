/*
Name: Mahamad Mustapha
Student ID# 171613219
Email: Mmustapha3@myseneca.ca
Section: ZEE
Date of completion: 7th December, 2022

I declare that my assessment is wholly my own work in accordance with Seneca Academic Policy.
No part of this assessment has been copied manually or electronically from any other source (including web sites) except for the
information supplied by the WEB222 instructors and / or made available in this assessment for my use. I also declare that no part
of this assignment has been distributed to other students.
*/

let err_messages = [];
const form = document.getElementById('contact-form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    err_messages = [];

    validatePostalCode();

    //pritning the error message
    if (err_messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = ` <pre>${err_messages.join('\r\n')}</pre>`;
    }
})

form.addEventListener('reset', (e) => {
    err_messages = [];
    errorElement.innerHTML = '';
})

//postal code validation
function validatePostalCode() {
    let postal_Code = document.getElementById('Postal-Code');
    let valid_code = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    if (!(postal_Code.value.match(valid_code))) {
        err_messages.push("- Invalid Postal Code");
    }
}

//code for radio button when the user clicks on the other button
function functionName() {
    var checkedValue = document.querySelector('input[name="purpose"]:checked').value;

    if (checkedValue == 'other') {
        document.getElementById('textareaId').style.display = 'block';
    }
    if (checkedValue == 'school') {
        document.getElementById('textareaId').style.display = 'none';
    }
    if (checkedValue == 'job-offer') {
        document.getElementById('textareaId').style.display = 'none';
    }
}

// Making the navbar responsive using a menu icon
let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.nav-links');

menu.addEventListener('click', function () {
    navbar.classList.toggle('open-menu');
    menu.classList.toggle('move');
});

// The navbar should collapse on small screens when scrolled
window.onscroll = () => {
    navbar.classList.remove('open-menu');
    menu.classList.remove('move');
}