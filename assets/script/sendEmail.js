/* A function that lets the user send me a email with the values of the form 
and then recieves a confirmation of the booking request */

(function () {
    emailjs.init("user_g4l4GLOXFxFHl2r0NkSa6");
})();

function success() {
    $('#success').show();
    return success();
}

function fail() {
    $('#fail').show();
    return fail();
}


function sendMail(contactForm) {
    emailjs.send("gmail", "fresh_fade", {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'time': contactForm.time.value,
        'saloon': contactForm.saloon.value
    })
    //The response(success/fail) of the use of the form.
        .then(
            function (response) {
                console.log('SUCCESS', response);
                return success();
            },
            function (error) {
                console.log('FAILURE');
                return fail();
            });
    return false;
}

