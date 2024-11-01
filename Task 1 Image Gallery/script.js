document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var closeBtn = document.getElementById("closeBtn");

    // Get all images in the gallery
    var images = document.querySelectorAll('.gallery img');

    // Add click event to each image
    images.forEach(function(image) {
        image.onclick = function() {
            modal.style.display = "block"; // Show the modal
            modalImg.src = this.src; // Set the source of the modal image
        }
    });

    // Close the modal when the close button is clicked
    closeBtn.onclick = function() {
        modal.style.display = "none"; // Hide the modal
    }

    // Also close the modal when clicking outside of the image
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none"; // Hide the modal
        }
    }
});