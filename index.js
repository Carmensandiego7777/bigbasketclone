let slideIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const slideWidth = images[0].clientWidth;
const totalSlides = images.length;
const radioButtons = document.querySelectorAll('input[name="radio-btn"]');

// Function to move slide to a specific index
function moveSlideTo(index) {
    const direction = index > slideIndex ? 1 : -1;
    slideIndex = index;
    if (slideIndex === totalSlides - 1 && direction === 1) {
        // If moving from the last slide to the first slide
        slides.style.transition = 'none';
        slides.style.transform = `translateX(-${totalSlides * slideWidth}px)`;
        // Trigger reflow
        slides.offsetWidth;
    }
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    updateRadioButtons();
}

// Function to update radio buttons based on current slide index
function updateRadioButtons() {
    radioButtons.forEach((radioBtn, index) => {
        radioBtn.checked = index === slideIndex;
    });
}

// Function to handle radio button click and move slide accordingly
function handleRadioBtnClick(index) {
    moveSlideTo(index);
}

// Set up event listeners for radio buttons
radioButtons.forEach((radioBtn, index) => {
    radioBtn.addEventListener('click', () => {
        handleRadioBtnClick(index);
    });
});

// Function to move slide automatically
// Function to move slide automatically
// Function to move slide automatically
function moveSlide(direction) {
    if (direction === -1) {
        slideIndex = (slideIndex - 1 + totalSlides) % totalSlides; // Move to the previous slide
    } else {
        slideIndex = (slideIndex + 1) % totalSlides; // Move to the next slide
    }
    moveSlideTo(slideIndex);
}


// Start automatic sliding
let slideInterval = setInterval(moveSlide, 5000);

// Clear the interval when mouse hovers over the slideshow
slides.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

// Resume automatic sliding when mouse leaves the slideshow
slides.addEventListener('mouseleave', () => {
    slideInterval = setInterval(moveSlide, 5000);
});

// Initial setup
updateRadioButtons();


document.addEventListener('DOMContentLoaded', function() {
    const showMoreButtons = document.querySelectorAll('.show-more');
    
    showMoreButtons.forEach(button => {
      button.addEventListener('click', function() {
        const hiddenItems = this.previousElementSibling.querySelectorAll('.hidden');
        
        hiddenItems.forEach(item => {
          item.style.display = 'block'; // Show hidden items
        });
        
        this.style.display = 'none'; // Hide the "Show More" button
      });
    });
  });
  


window.addEventListener('scroll', function() {
    var navbar1 = document.getElementById('navbar1');
    var navbar2 = document.getElementById('navbar2');
    
    if (window.scrollY > 0) {
        navbar1.classList.remove('active');
        navbar2.classList.add('active');
    } else {
        navbar1.classList.add('active');
        navbar2.classList.remove('active');
    }
});

// surfer 
const scroller = document.querySelector('.surfer-scroller')
const rightBtn = document.querySelector('.scroll-right')
const leftBtn = document.querySelector('.scroll-left')

console.log(scroller, rightBtn, leftBtn)

rightBtn.addEventListener('click', () => {
    scroller.scrollLeft += 10000
})
leftBtn.addEventListener('click', () => {
    scroller.scrollLeft -= 10000
})



const scroller1 = document.querySelector('.surfer-scroller1')
const rightBtn1 = document.querySelector('.scroll-right1')
const leftBtn1 = document.querySelector('.scroll-left1')

console.log(scroller1, rightBtn1, leftBtn1)

rightBtn.addEventListener('click', () => {
    scroller1.scrollLeft += 10000
})
leftBtn.addEventListener('click', () => {
    scroller1.scrollLeft -= 10000
})
