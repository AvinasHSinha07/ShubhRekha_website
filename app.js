document.addEventListener("DOMContentLoaded", function () {
  

  if (window.lucide && typeof window.lucide.createIcons === "function") {
    window.lucide.createIcons();
  }


  const contactForm = document.querySelector("form[name='contact']");
  

  const allButtons = document.querySelectorAll("button");

  allButtons.forEach((btn) => {
  
    if (btn.innerText.includes("Book a Reading") || btn.hasAttribute("data-book-click")) {
      
      btn.addEventListener("click", function (e) {
        e.preventDefault(); 

        if (contactForm) {
        
          contactForm.scrollIntoView({ behavior: "smooth", block: "center" });

         
          const firstInput = contactForm.querySelector("input");
          if (firstInput) {
          
            setTimeout(() => {
              firstInput.focus();
            }, 800);
          }
        }
      });
    }
  });


  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }
  
});