var name1 = document.getElementById("name1")
var email = document.getElementById("email")
var message = document.getElementById("message")
var alertmessage = document.getElementById("alertmessage")
alertmessage.style.display = "none"

function contact() {
    alertmessage.style.color = "red"
    alertmessage.style.fontWeight = "bold"

    if (name1.value === "") {
        alertmessage.innerHTML = "Name Required!"
        alertmessage.style.display = "block"

        setTimeout(function () {
            alertmessage.style.display = "none"
        }, 2000);
    } else if (email.value === "") {
        alertmessage.innerHTML = "Email Required!"
        alertmessage.style.display = "block"

        setTimeout(function () {
            alertmessage.style.display = "none"
        }, 2000);
    } else if (message.value === "") {
        alertmessage.innerHTML = "Message Required!"
        alertmessage.style.display = "block"

        setTimeout(function () {
            alertmessage.style.display = "none"
        }, 2000);
    } else {
        alertmessage.innerHTML = "Successfully Contacted"
        alertmessage.style.color = "green"
        alertmessage.style.display = "block"

        setTimeout(function () {
            alertmessage.style.display = "none"
        }, 2000);



        Email.send({
            SecureToken: "80b8b5d4-aac2-4779-a239-81a1b66401c1",
            To: 'kumarhirtik3@gmail.com',
            From: "kumarhirtik3@gmail.com",
            Subject: "Contact Form Enquiry",
            Body: "Name :- " + name1.value + " " +
                "Email :- " + email.value + " " +
                "Message :- " + message.value

        }).then(
        );


        name1.value = ""
        email.value = ""
        message.value = ""
    }

}

// function contact() {
//     console.log("clicked")
//     Email.send({
//       SecureToken: "80b8b5d4-aac2-4779-a239-81a1b66401c1",
//       To: 'kumarhirtik3@gmail.com',
//       From: "karwahirtik@gmail.com",
//       Subject: "This is the subject",
//       Body: "And this is the body",

//     }).then(
//       message => alert("hi")
//     );
//   }
