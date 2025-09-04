// Toggle navigation menu

function toggleMenu() {

  const menu = document.getElementById("menu");

  menu.style.display = (menu.style.display === "block") ? "none" : "block";

}

// Form submission

document.getElementById("contactForm").addEventListener("submit", function(e) {

  e.preventDefault();

  

  const name = document.getElementById("name").value;

  const email = document.getElementById("email").value;

  const phone = document.getElementById("phone").value;

  const dob = document.getElementById("dob").value;

  // In real projects, you need backend or email API like EmailJS to send emails.

  document.getElementById("formMessage").innerText =

    `Thanks ${name}, your information has been submitted!`;

});