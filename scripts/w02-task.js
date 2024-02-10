/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Juan Pablo Rodriguez Pedrozo';
let currentYear = new Date().getFullYear;
let profilePicture = '/images/IMG-20201023.jpg'

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.createElement('img');
imageElement.src = profilePicture;

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${profilePicture}`);



/* Step 5 - Array */

const favoriteFoods = ["cannelloni", "Barbecue", "Burgers", "Ice Cream"];





                            