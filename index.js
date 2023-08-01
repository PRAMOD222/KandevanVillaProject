// Get the elements
const playButton = document.querySelector(".play-button");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-button");
const arrow = document.getElementById("scrollArrow");
const navbar = document.getElementById("navbar");
const body = document.querySelector("body");
const nav = document.querySelector("nav");
const dateInputs = document.querySelectorAll('input[type="date"]');
const arrivelDate = document.getElementById("arrivel-date")


dateInputs.forEach(input => {
  const placeholder = input.nextElementSibling;

  input.addEventListener('input', () => {
    placeholder.style.display = input.value ? 'none' : 'inline';
  });
});


nav.style.transition = "all 0.5s ease-in-out";
nav.style.display = "none";
// Add a scroll event listener to the window
window.addEventListener("scroll", () => {
  // Get the scrollY position of the window
  const scrollY = window.scrollY;

  // Check if the scrollY is more than 20
  if (scrollY > 100) {
    nav.classList.add("navbar-fixed");
    nav.style.display = "flex";
    nav.style.position = "fixed";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.zIndex = "1000";
    nav.style.padding = "0 0";
  } else {
    nav.classList.remove("navbar-fixed");
    nav.style.display = "none";
    nav.style.position = "relative";
    nav.style.top = "0";
    nav.style.width = "100%";
    nav.style.zIndex = "1000";
  }
});

// Add a click event listener to the play button
playButton.addEventListener("click", () => {
  // Show the overlay when the play button is clicked
  overlay.style.display = "block";
});

// Add a click event listener to the close button
closeButton.addEventListener("click", () => {
  // Hide the overlay when the close button is clicked
  overlay.style.display = "none";
});

arrow.addEventListener("click", function () {
  navbar.classList.add("navbar-fixed");
});

const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');

function isClickedInsideSidebar(event) {
  return sidebar.contains(event.target) || menuIcon.contains(event.target);
}

menuIcon.addEventListener('click', () => {
  sidebar.classList.toggle('hidden');
});

const listItems = document.querySelectorAll('.side-list-itom');
listItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebar.classList.add('hidden');
  });
});

document.addEventListener('click', (event) => {
  if (!isClickedInsideSidebar(event)) {
    sidebar.classList.add('hidden');
  }
});

arrivelDate.addEventListener("click", ()=> {
  arrivelDate.inputMode = Date
})
