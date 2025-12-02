document.addEventListener("DOMContentLoaded", function () {
  
  // 1. Initialize Icons
  // This looks for the <i data-lucide="..."> tags and turns them into SVGs
  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }

  // 2. Logic for "Book a Reading" Buttons
  // Instead of hiding pages, we simply scroll smoothly to the contact form.
  const contactForm = document.querySelector("form[name='contact']");
  
  // We select ALL buttons on the page
  const allButtons = document.querySelectorAll("button");

  allButtons.forEach((btn) => {
    // We attach the click event ONLY if the button text is "Book a Reading" 
    // OR if it has the specific data attribute you added in the HTML
    if (btn.innerText.includes("Book a Reading") || btn.hasAttribute("data-book-click")) {
      
      btn.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default browser jump

        if (contactForm) {
          // Smooth scroll to the form
          contactForm.scrollIntoView({ behavior: "smooth", block: "center" });

          // Optional: Highlight the Name input field so they can type immediately
          const firstInput = contactForm.querySelector("input");
          if (firstInput) {
            // Small delay to wait for the scroll to finish
            setTimeout(() => {
              firstInput.focus();
            }, 800);
          }
        }
      });
    }
  });

  // 3. Set Dynamic Year (If you add <span id="yearSpan"></span> in your footer later)
  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
  
});