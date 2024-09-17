// Get a reference to the scroll-up button element
var scrollUpButton = document.getElementById("scroll-up-button");

// Add a scroll event listener to show/hide the button
window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        // Show the button when scrolled down 300 pixels
        scrollUpButton.style.display = "block";
    } else {
        // Hide the button when not scrolled down enough
        scrollUpButton.style.display = "none";
    }
});

// Add a click event listener to scroll to the top when the button is clicked
scrollUpButton.addEventListener("click", function () {
    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
