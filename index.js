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

// Function to open the modal
function openModal() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("contactModal");
    modal.style.display = "none";
}

// Event listener for clicking on the myImg image
window.addEventListener("DOMContentLoaded", function () {
    var myImg = document.querySelector(".rounded-circle");
    myImg.addEventListener("click", openModal);
});

// Event listener for clicking on the close button or outside the modal to close it
window.addEventListener("DOMContentLoaded", function () {
    var closeBtn = document.querySelector(".close");
    var modal = document.getElementById("contactModal");
    
    closeBtn.addEventListener("click", closeModal);

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
});

