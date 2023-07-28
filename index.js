// Get the elements
const playButton = document.querySelector('.play-button');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.close-button');
const arrow = document.getElementById('scrollArrow')
const navbar = document.getElementById('navbar');

// Add a click event listener to the play button
playButton.addEventListener('click', () => {
  // Show the overlay when the play button is clicked
  overlay.style.display = 'block';
});

// Add a click event listener to the close button
closeButton.addEventListener('click', () => {
  // Hide the overlay when the close button is clicked
  overlay.style.display = 'none';
});

arrow.addEventListener('click', function () {
  navbar.classList.add('navbar-fixed');
});