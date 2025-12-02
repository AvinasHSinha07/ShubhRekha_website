document.addEventListener("DOMContentLoaded", function () {
  const homePage = document.getElementById("homePage");
  const bookingPage = document.getElementById("bookingPage");

  function showHome() {
    homePage.classList.remove("hidden");
    bookingPage.classList.add("hidden");
  }

  function showBooking() {
    homePage.classList.add("hidden");
    bookingPage.classList.remove("hidden");
  }

  function wireBookButtons() {
    const bookButtons = document.querySelectorAll("[data-book-click]");
    bookButtons.forEach((btn) => {
      btn.addEventListener("click", showBooking);
    });
  }

  function wireBackButtons() {
    const backButtons = document.querySelectorAll("[data-back-home]");
    backButtons.forEach((btn) => {
      btn.addEventListener("click", showHome);
    });
  }

  function setYear() {
    const yearSpan = document.getElementById("yearSpan");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
    }
  }

  function initIcons() {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  }

  function init() {
    showHome();          // default -> "home" page
    wireBookButtons();
    wireBackButtons();
    setYear();
    initIcons();
  }

  init();
});
