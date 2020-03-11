function sendMail(contactForm) {
    emailjs.send("gmail", "fresh_fade", {
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'booking_request': contactForm.bookingrequest.value
    })
    .then(
        function(response){
            console.log('SUCCESS', response);
        },
        function(error) {
            console.log('FAILURE', error);
        });
        return false;
}