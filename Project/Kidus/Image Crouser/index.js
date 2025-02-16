// Select the slider container
const slider = document.getElementById("slider");

// Get all images inside the slider
const images = slider.getElementsByTagName("img");

// Initialize the index to track the current image
let index = 0;
function stopdrag(e) {
  e.preventDefault();
}
/**
 * Function to show the image based on the index
 * Moves the slider to the correct position
 */
function showImage(i) {
  slider.style.transform = `translateX(-${i * 100}%)`; // Shift the slider left by 'i * 100%'
}
const autoSlide = () => {
  index = (index + 1) % images.length; // Move to the next image, looping back to the first if at the end
  showImage(index); // Update the slider position
}

// Add event listener for the "Next" button
document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % images.length; // Move to the next image, looping back to the first if at the end
  console.log(images.length);
  
  showImage(index); // Update the slider position
});

// Add event listener for the "Previous" button
document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length; // Move to the previous image, looping back to the last if at the beginning
  showImage(index); // Update the slider position
});

// Start the auto-slide timer
 const slideInterval = setInterval(autoSlide, 3000);
 