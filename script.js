document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('jobApplicationForm');
    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('input', validateForm);
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm()) {
            // Submit form
            alert('Form submitted successfully!');
        }
    });

    function validateForm() {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const addressInput = document.getElementById('address');
        const resumeInput = document.getElementById('resume');
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const phoneError = document.getElementById('phoneError');
        const addressError = document.getElementById('addressError');
        const resumeError = document.getElementById('resumeError');

        const namePattern = /^[a-zA-Z]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let validForm = true;

        if (!nameInput.value.match(namePattern) || nameInput.value.trim() === '') {
            nameError.textContent = 'Name must only contain letters and cannot be empty';
            validForm = false;
        } else {
            nameError.textContent = '';
        }

        if (!emailInput.value.match(emailPattern) || emailInput.value.trim() === '') {
            emailError.textContent = 'Enter a valid email address';
            validForm = false;
        } else {
            emailError.textContent = '';
        }

        if (!phoneInput.value.match(/^\d{3}-\d{3}-\d{4}$/) || phoneInput.value.trim() === '') {
            phoneError.textContent = 'Enter a valid phone number (XXX-XXX-XXXX)';
            validForm = false;
        } else {
            phoneError.textContent = '';
        }

        if (addressInput.value.trim() === '') {
            addressError.textContent = 'Address cannot be empty';
            validForm = false;
        } else {
            addressError.textContent = '';
        }

        if (resumeInput.files.length === 0) {
            resumeError.textContent = 'Please upload your resume';
            validForm = false;
        } else if (resumeInput.files[0].size > 5 * 1024 * 1024) {
            resumeError.textContent = 'Resume file size cannot exceed 5MB';
            validForm = false;
        } else {
            resumeError.textContent = '';
        }

        submitBtn.disabled = !validForm;
        return validForm;
    }
});
