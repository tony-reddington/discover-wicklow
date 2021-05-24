function sendMail(contactForm) {
  emailjs.send("gmail", "discoverwicklow", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailaddress.value,
      "from_message": contactForm.message.value
    })
    .then(
      function (response) {
        console.log("Message sent succesfully", response);
        document.getElementById("contactForm").reset();
      },
      function (error) {
        console.log("Message not sent", error);
      }
    );
  return false;
}