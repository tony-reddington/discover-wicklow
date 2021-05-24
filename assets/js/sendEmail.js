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
        document.getElementById("onSubmitText").innerText = "Your message has been sent!";
      },
      function (error) {
        console.log("Message not sent", error);
        document.getElementById("onSubmitText").innerText = "Please ensure that all fields are filled in correctly";
        document.getElementById("onSubmitText").style.color = "red";
      }
    );
  return false;
}