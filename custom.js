window.addEventListener('scroll', function() {
    var navbar1 = document.getElementById('navbar1');
    var navbar2 = document.getElementById('navbar2');
    var scrollPosition = window.scrollY || window.pageYOffset;
    var transitionDuration = 1500; // Transition duration in milliseconds (0.5 seconds)

    if (scrollPosition > 0) {
        // Transition effect for hiding navbar1 and showing navbar2
        navbar1.style.transition = 'opacity ' + (transitionDuration / 2000) + 's';
        navbar1.style.opacity = '0';
        navbar1.classList.add('hidden');
        
        navbar2.style.transition = 'opacity ' + (transitionDuration / 2000) + 's';
        navbar2.style.opacity = '1';
        navbar2.classList.remove('hidden');
    } else {
        // Transition effect for hiding navbar2 and showing navbar1
        navbar2.style.transition = 'opacity ' + (transitionDuration / 2000) + 's';
        navbar2.style.opacity = '0';
        navbar2.classList.add('hidden');

        navbar1.style.transition = 'opacity ' + (transitionDuration / 2000) + 's';
        navbar1.style.opacity = '1';
        navbar1.classList.remove('hidden');
    }
});


$(document).ready(function() {
    $('.dropdown').click(function() {
        $(this).next('.dropdown-content').toggle();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.dropdown').length) {
            $('.dropdown-content').hide();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector(".ex-dropdown");
    const categoryContainer = document.querySelector(".category-container");

    dropdown.addEventListener("click", function() {
        categoryContainer.style.scale = categoryContainer.style.scale === "0" ? "1" : "0";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector('.dropdowns');
    var dropdownContents = document.querySelector('.dropdown-contents');

    dropdown.addEventListener('click', function() {
        if (dropdownContents.style.display === 'none') {
            dropdownContents.style.display = 'block';
        } else {
            dropdownContents.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector('.dropdowns');
    var dropdownContents = document.querySelector('.dropdown-contents');
    var overlay = document.getElementById('overlay');

    dropdown.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up

        if (dropdownContents.style.display === 'none') {
            dropdownContents.style.display = 'block';
        } else {
            dropdownContents.style.display = 'none';
        }
    });

    // Click event listener for toggling overlay when clicking outside dropdown
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && !dropdownContents.contains(event.target)) {
            if (overlay.style.display === 'none') {
                overlay.style.display = 'block';
            } else {
                overlay.style.display = 'none';
            }
        }
    });

    // Click event listener on dropdown contents to prevent hiding when clicking inside dropdown
    dropdownContents.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent the click event from bubbling up
    });
});


 
document.addEventListener("DOMContentLoaded", function() {
    var loginSignupButton = document.getElementById('loginSignupButton');
    var modal = document.getElementById('modal');
    var closeButton = document.getElementById('closeButton');

    loginSignupButton.addEventListener('click', function() {
        // Toggle the display of the modal
        if (modal.style.display === 'block') {
            modal.style.display = 'none'; // Close the modal if it's already open
        } else {
            modal.style.display = 'block'; // Otherwise, open the modal
        }
    });

    closeButton.addEventListener('click', function() {
        // Hide the modal
        console.log("closed")
        modal.style.display = 'none';
    });

    // Close the modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});





  
