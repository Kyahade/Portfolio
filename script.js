document.addEventListener('DOMContentLoaded', function () {
  // Scroll to Projects Section
  document.getElementById('viewWorkBtn').addEventListener('click', () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  });

  // Handle Contact Form Submission
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for your message! I'll get back to you soon.");
    this.reset();
  });
});
