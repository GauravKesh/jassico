// Constants
const divContainer = document.querySelector(".mainContent"); // Container where slides must be shown
const divs = document.querySelectorAll(".content1"); // All divs with class name .content1

// Variables
let currentDiv = 0;

// Show div / current div
function showDiv() {
  divs.forEach((div) => {
    div.style.display = "none"; // Hide all divs
  });
  divs[currentDiv].style.display = "flex"; // Show current div
  divs[currentDiv].querySelector(".prod_hed").style.animation = "fadeIn 1s ease-in"; // Heading animation
  divs[currentDiv].querySelector(".prd_info").style.animation = "moveXBack 1s ease-in"; // Description animation
  divs[currentDiv].querySelector(".img-sec").style.animation = "moveRight 1s ease-in"; // Image animation
}

// Next slide
function nextDiv() {
  currentDiv++; // Increment the index for next div

  // Check if index exceeds the max content
  if (currentDiv >= divs.length) {
    currentDiv = 0; // Set the slide to index 0
  }

  showDiv(); // Call the showDiv function
}

// Previous slide
function prevDiv() {
  currentDiv--; // Decrement the index for previous div

  // Check if index goes below the min content
  if (currentDiv < 0) {
    currentDiv = divs.length - 1;
  }

  showDiv(); // Call the showDiv function
}

// Initial setup
showDiv(); // Call the showDiv function to display the initial div(for auto slide)
setInterval(nextDiv, 3000); // Auto slide every 3 seconds {we can also remove this}
