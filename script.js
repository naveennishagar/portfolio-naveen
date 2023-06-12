document.addEventListener("DOMContentLoaded", function(event) {
    const sliderImages = document.querySelectorAll('.slider img');
    let currentImageIndex = 0;
  
    function changeImage() {
      sliderImages[currentImageIndex].style.display = 'none';
  
      currentImageIndex = (currentImageIndex + 1) % sliderImages.length;
  
      sliderImages[currentImageIndex].style.display = 'block';
    }
  
    setInterval(changeImage, 2000);
  });
  