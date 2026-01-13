// ================= MOBILE MENU =================
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// ================= ABOUT TABS =================
document.addEventListener("DOMContentLoaded", () => {
  const skillsBtn = document.getElementById("skills-btn");
  const educationBtn = document.getElementById("education-btn");
  const skills = document.getElementById("skills");
  const education = document.getElementById("education");

  function setActive(activeBtn, inactiveBtn, showEl, hideEl) {
    // Show / hide content
    showEl.classList.remove("hidden");
    hideEl.classList.add("hidden");

    // Active tab
    activeBtn.classList.remove("after:scale-x-0", "text-gray-400");
    activeBtn.classList.add("after:scale-x-100", "text-white");

    // Inactive tab
    inactiveBtn.classList.remove("after:scale-x-100", "text-white");
    inactiveBtn.classList.add("after:scale-x-0", "text-gray-400");
  }

  // Default tab
  setActive(skillsBtn, educationBtn, skills, education);

  // Events
  skillsBtn.addEventListener("click", () => {
    setActive(skillsBtn, educationBtn, skills, education);
  });

  educationBtn.addEventListener("click", () => {
    setActive(educationBtn, skillsBtn, education, skills);
  });
});
