// Array of image paths
const images = ["blue.jpeg", "green.jpeg", "red.jpeg"]; 
let currentIndex = 0;

// Function to change the image
function nextImage(event) {
  const sliderImage = document.getElementById("sliderImage");

  // Get the mouse position relative to the image
  const clickPosition = event.clientX - sliderImage.getBoundingClientRect().left;

  // If clicked on the left half, go to the previous image
  if (clickPosition < sliderImage.clientWidth / 2) {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  } 
  // If clicked on the right half, go to the next image
  else {
    currentIndex = (currentIndex + 1) % images.length;
  }

  // Update the image source
  sliderImage.src = images[currentIndex];
}