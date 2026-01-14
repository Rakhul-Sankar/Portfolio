// ================= MOBILE MENU =================
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// ================= ABOUT TABS =================
document.addEventListener("DOMContentLoaded", () => {
  const frontendBtn = document.getElementById("frontend-btn");
  const languagesBtn = document.getElementById("languages-btn");
  const educationBtn = document.getElementById("education-btn");

  const frontend = document.getElementById("frontend");
  const languages = document.getElementById("languages");
  const education = document.getElementById("education");

  function setActive(activeBtn, showEl) {
    // Hide all sections
    [frontend, languages, education].forEach(el => el.classList.add("hidden"));
    // Show selected section
    showEl.classList.remove("hidden");

    // Reset all buttons
    [frontendBtn, languagesBtn, educationBtn].forEach(btn => {
      btn.classList.remove("after:scale-x-100", "text-white");
      btn.classList.add("after:scale-x-0", "text-gray-400");
    });

    // Activate selected button
    activeBtn.classList.remove("after:scale-x-0", "text-gray-400");
    activeBtn.classList.add("after:scale-x-100", "text-white");
  }

  // Default tab
  setActive(frontendBtn, frontend);

  // Events
  frontendBtn.addEventListener("click", () => setActive(frontendBtn, frontend));
  languagesBtn.addEventListener("click", () => setActive(languagesBtn, languages));
  educationBtn.addEventListener("click", () => setActive(educationBtn, education));
});
