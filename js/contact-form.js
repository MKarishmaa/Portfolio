document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Clear previous status messages
            formStatus.style.display = 'none';
            formStatus.classList.remove('success', 'error');
            formStatus.textContent = '';

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Simple Client-Side Validation
            if (!name || !email || !subject || !message) {
                formStatus.textContent = 'Please fill in all required fields.';
                formStatus.classList.add('error');
                formStatus.style.display = 'block';
                return; // Stop execution
            }

            // Email format validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formStatus.textContent = 'Please enter a valid email address.';
                formStatus.classList.add('error');
                formStatus.style.display = 'block';
                return;
            }

            // --- Form Submission Logic (Choose one option below) ---

            // OPTION 1: Using Formspree.io (Recommended for static sites without backend)
            // 1. Go to https://formspree.io/ and create an account.
            // 2. Create a new form and copy your unique endpoint URL.
            // 3. Replace 'YOUR_FORMSPREE_ENDPOINT_HERE' with your actual endpoint.
            // 4. Ensure your HTML form's 'action' attribute is removed, as fetch handles it.

            const formspreeEndpoint = 'https://formspree.io/f/mvgrrqyr'; // <<< REPLACE THIS!

            // if (formspreeEndpoint === 'YOUR_FORMSPREE_ENDPOINT_HERE') {
            //     formStatus.textContent = 'Please replace "YOUR_FORMSPREE_ENDPOINT_HERE" in js/contact-form.js with your Formspree endpoint.';
            //     formStatus.classList.add('error');
            //     formStatus.style.display = 'block';
            //     return;
            // }

            // fetch(formspreeEndpoint, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         'Accept': 'application/json'
            //     },
            //     body: JSON.stringify({ name, email, subject, message })
            // })
            // .then(response => {
            //     if (response.ok) {
            //         formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
            //         formStatus.classList.add('success');
            //         contactForm.reset(); // Clear the form
            //     } else {
            //         formStatus.textContent = 'Oops! There was a problem submitting your form. Please try again later or contact me directly.';
            //         formStatus.classList.add('error');
            //     }
            // })
            // .catch(error => {
            //     formStatus.textContent = 'An error occurred. Please check your internet connection and try again.';
            //     formStatus.classList.add('error');
            //     console.error('Fetch error:', error);
            // })
            // .finally(() => {
            //     formStatus.style.display = 'block';
            // });


            // OPTION 2: Simple "Thank You" (No actual email sending, good for initial showcase)
            // If you don't want to set up Formspree immediately, use this:

            formStatus.textContent = 'Thank you for your message! I will get back to you soon.';
            formStatus.classList.add('success');
            formStatus.style.display = 'block';
            contactForm.reset(); // Clear the form

        });
    }
});