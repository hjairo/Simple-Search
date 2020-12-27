/**
 * Treehouse FSJS Techdegree - Project Warm Up
 * Simple Search - JS
 * Developed by: Robert Manolis - Student Success Specialist
 *               Milwaukie, OR - 2019
 */

"use strict";

/* Variables to reference the `input` and search `button` elements */
const search = document.querySelector('#search-input');
const submit = document.querySelector('#submit');


/* Variable to store HTMLCollection of `table` cells */
const tableCells = document.querySelectorAll('td');

// Helpful log statements
console.log(search);
console.log(submit);
console.log(tableCells);

const searchNames = (searchInput, names) => {

  console.log(searchInput);
  console.log(names);
  for (let i = 0; i < names.length; i++){
    names[i].classList.remove("match");
    if (searchInput.value.length !== 0 && names[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())) {
      names[i].classList.add("match");
    };
  };
};

/* submit listener */
submit.addEventListener('click', (event) => {
  event.preventDefault();

  searchNames(search, tableCells);
  console.log('Submit button is functional!');
});

/* submit listener */
search.addEventListener('keyup', () => {

  searchNames(search, tableCells);
  console.log('Keyup event on the Search input is functional!');
});
