$(document).ready(function() {
    // Form Validation with jQuery
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Name Validation
        const name = $('#name').val().trim();
        if (name === '') {
            showError('#nameError', 'Nama tidak boleh kosong');
            isValid = false;
        } else {
            hideError('#nameError');
        }
        
        // Email Validation
        const email = $('#email').val().trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            showError('#emailError', 'Email tidak boleh kosong');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            showError('#emailError', 'Format email tidak valid');
            isValid = false;
        } else {
            hideError('#emailError');
        }
        
        // Subject Validation
        const subject = $('#subject').val().trim();
        if (subject === '') {
            showError('#subjectError', 'Subject tidak boleh kosong');
            isValid = false;
        } else {
            hideError('#subjectError');
        }
        
        // Message Validation
        const message = $('#message').val().trim();
        if (message === '') {
            showError('#messageError', 'Pesan tidak boleh kosong');
            isValid = false;
        } else if (message.length < 10) {
            showError('#messageError', 'Pesan terlalu pendek (minimal 10 karakter)');
            isValid = false;
        } else {
            hideError('#messageError');
        }
        
        // If everything is valid, submit the form (here just showing success message)
        if (isValid) {
            alert('Pesan berhasil dikirim!');
            this.reset();
        }
    });
    
    function showError(element, message) {
        $(element).text(message).show();
        $(element).prev('input, textarea').addClass('error-input');
    }
    
    function hideError(element) {
        $(element).hide();
        $(element).prev('input, textarea').removeClass('error-input');
    }
    
    // Add error-input class styling
    const errorStyle = document.createElement('style');
    errorStyle.textContent = `
        .error-input {
            border: 1px solid #ff6b6b !important;
        }
        
        .error-message {
            display: none;
            color: #ff6b6b;
            font-size: 14px;
            margin-top: 5px;
        }
    `;
    document.head.appendChild(errorStyle);
});