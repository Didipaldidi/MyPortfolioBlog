drawText('Laurentius Valdi Adela');

// The code below will allow you to interact with the letters
bounceBubbles();

// Function to update the navbar position based on scrolling
function updateNavbarPosition() {
    var navbar = document.getElementById("navbar");
    var distanceFromTop = window.scrollY;

    if (distanceFromTop > 100) { // Adjust this value as needed
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// Event listener for scroll event
window.addEventListener("scroll", updateNavbarPosition);
