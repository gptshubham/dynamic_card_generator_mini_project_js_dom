// Program: Generate New Cards when clicked on Card +

/*
// selecting existing card
const cardPlus = document.querySelector('.card');
// selecting the container div
const container = document.querySelector('.container');
// setting up the counter that counts the card number
let counter = 1;
// setting up event listener to create new cards when clicked on Card+
cardPlus.addEventListener('click', () => {
  // generating new card (div.card element)
  newCard = document.createElement('div');
  // setting up the class attribute of new card with 'card' as value
  newCard.className = 'card';
  // counter as content of the div.card element and then incrementing the counter for further use
  newCard.innerText = counter++;
  // appending new card to the container
  container.append(newCard);
});
*/

// Alternatively: using cloneNode: instead of creating a new card, we will clone the existing add-card.
// In that case we will explicitly remove 'add-card' class from the cloned node

// selecting existing card
const cardPlus = document.querySelector('.card');
// selecting the container div
const container = document.querySelector('.container');
// setting up the counter that counts the card number
let counter = 1;
// setting up event listener to create new cards when clicked on Card+
cardPlus.addEventListener('click', () => {
  const newCard = cardPlus.cloneNode();
  newCard.classList.remove('add-card');
  newCard.innerText = counter++;
  container.append(newCard);
});
