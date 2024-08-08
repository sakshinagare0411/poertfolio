let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};
changeText();
setInterval(changeText, 3000);

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const fullName = document.getElementById("name").value;
    const emailAddress = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Construct the email body message
    const bodyMessage = `Full Name: ${fullName}<br> Email: ${emailAddress}<br> Phone number: ${phoneNumber}<br> Message: ${message}`;

    // Send email using Email.send() (not recommended for client-side use)
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "your_elasticemail_username",
        Password: "your_elasticemail_password",
        To: "sakshin0403@gmail.com",
        From: "sakshin0403@gmail.com",
        Subject: "Contact Form Submission",
        Body: bodyMessage,
        }).then(function(message) {
            alert("Email sent successfully!");
            console.log(message);
        }).catch(function(error) {
            console.error("Error encountered while sending email:", error);
            alert("Failed to send email. Please try again later.");
        });

    // Optionally, reset the form fields after submission
    form.reset();
});


  