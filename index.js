// Handle form submission
function handleForm(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("form-message");

  if (name && email) {
    message.style.color = "green";
    message.textContent = `Thanks ${name}, we’ll contact you soon!`;

    // Optionally clear the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  } else {
    message.style.color = "red";
    message.textContent = "Please fill out both fields.";
  }
}

// Scroll to form section when button clicked
function scrollToForm() {
  document.getElementById("form-section").scrollIntoView({ behavior: "smooth" });
}

// Mobile menu toggle
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}
