function sendEmail() {
    console.log("clicked")
    Email.send({
      SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
      To: 'kumarhirtik3@gmail.com',
      From: "karwahirtik@gmail.com",
      Subject: "This is the subject",
      Body: "And this is the body",

    }).then(
      message => alert("hi")
    );
  }
