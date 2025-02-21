$(document).ready(function () {
    // Remove error class when input is clicked
    $('#name, #email, #phone, #message').click(function () {
        $(this).removeClass("error_input");
    });

    $('#send_message').click(function (e) {
        e.preventDefault();

        // Variable declaration
        var error = false;
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var message = $('#message').val().trim();

        // Form field validation
        if (name === '') {
            error = true;
            $('#name').addClass("error_input");
        }
        if (email === '' || email.indexOf('@') === -1) {
            error = true;
            $('#email').addClass("error_input");
        }
        if (phone === '') {
            error = true;
            $('#phone').addClass("error_input");
        }
        if (message === '') {
            error = true;
            $('#message').addClass("error_input");
        }

        // Stop execution if validation fails
        if (error) return;

        // Disable button and update text
        $('#send_message').prop("disabled", true).val("Sending...");

        // Simulate form submission delay
        setTimeout(() => {
            // Fade out form and show success message (from HTML)
            $('#booking_form').fadeOut(500, function () {
                $('#success_message_col').fadeIn(500);
            });

        }, 2000);
    });

    // Show form again when "Reorder Again" button is clicked
    $('#reorder_button').click(function () {
        $('#success_message_col').fadeOut(500, function () {
            $('#booking_form').fadeIn(500);
            $('#send_message').prop("disabled", false).val("Send The Message");
            $('#booking_form').fadeIn(500)[0].reset(); // Clear form fields
        });
    });
});
