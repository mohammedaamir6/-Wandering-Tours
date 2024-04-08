
document.addEventListener("DOMContentLoaded", function() {
    const countries = document.querySelectorAll(".new-country-name");
    let index = 0;

    function showNextCountry() {
        if (index < countries.length) {
            countries[index].classList.add("show");
            index++;
            setTimeout(hideCurrentCountry, 1000);
        } else {  
            index = 0;
            setTimeout(showNextCountry, 1000); 
        }
    }

    function hideCurrentCountry() {
        if (index > 0) {
            countries[index - 1].classList.remove("show");
            setTimeout(showNextCountry, 500); 
        }
    }

    showNextCountry(); 
});


document.addEventListener("DOMContentLoaded", function() {
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");

    // Get the current date
    const currentDate = new Date();

    // Format the current date as "yyyy-mm-dd"
    const currentDateString = currentDate.getFullYear() + '-' +
                               (currentDate.getMonth() + 1).toString().padStart(2, '0') + '-' + 
                               currentDate.getDate().toString().padStart(2, '0');

    // Set the default value and minimum value of start and end date inputs to the current date
    startDateInput.value = currentDateString;
    endDateInput.value = currentDateString;
    startDateInput.min = currentDateString;
    endDateInput.min = currentDateString;

    // Set the min attribute of the end date input to the selected start date
    startDateInput.addEventListener("change", function() {
        endDateInput.min = startDateInput.value;
    });

    // Ensure that the end date accepts dates greater than or equal to the start date
    endDateInput.addEventListener("change", function() {
        startDateInput.max = endDateInput.value;
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("bookingForm");

    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        // Check if all required fields are filled
        const destination = document.getElementById("destination").value;
        const persons = document.getElementById("persons").value;
        const startDate = document.getElementById("startDate").value;
        const endDate = document.getElementById("endDate").value;
        const description = document.getElementById("description").value;

        if (destination && persons && startDate && endDate && description) {
            // All fields are filled, display success message
            alert("Booking successful.");
            // Reset the form
            bookingForm.reset();
        } else {
            // Some fields are empty, display error message
            alert("Please fill in all required fields.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    
    galleryItems.forEach(function(item) {
        item.addEventListener("mousemove", function(event) {
            const rect = item.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const deltaX = (centerX - x) / centerX;
            const deltaY = (centerY - y) / centerY;
            
            const rotationX = 10 * deltaY;
            const rotationY = -10 * deltaX;
            
            item.style.transform = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        });
        
        item.addEventListener("mouseleave", function() {
            item.style.transform = "none";
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    // Get the registration form element
    var registerModal = document.getElementById("registerModal");

    // Add an event listener for the form submission
    registerModal.addEventListener("submit", function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Validate the form fields
        var username = document.getElementById("username").value.trim();
        var email = document.getElementById("email").value.trim();
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm-password").value;

        // Perform basic validation
        if (username === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill in all required fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Perform any other validation as needed...

        // If form is valid, show success message and redirect to login
        alert("Registration successful! Redirecting to login...");

        // Close the registration modal (assuming its ID is 'registerModal')
        var registerModal = document.getElementById("registerModal");
        var bootstrapModal = new bootstrap.Modal(registerModal);
        bootstrapModal.hide();

        // Show the login modal (assuming its ID is 'loginModal')
        var loginModal = document.getElementById("loginModal");
        var bootstrapModalLogin = new bootstrap.Modal(loginModal);
        bootstrapModalLogin.show();
    });
});




document.getElementById('contact-number').addEventListener('input', function() {
    // Remove any non-numeric characters
    this.value = this.value.replace(/\D/g, '');
});
