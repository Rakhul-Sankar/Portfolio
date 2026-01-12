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
    // content
    showEl.classList.remove("hidden");
    hideEl.classList.add("hidden");

    // active tab
    activeBtn.classList.remove("border-transparent", "text-gray-400");
    activeBtn.classList.add("border-red-600", "text-white");

    // inactive tab
    inactiveBtn.classList.remove("border-red-600", "text-white");
    inactiveBtn.classList.add("border-transparent", "text-gray-400");
  }

  // default tab
  setActive(skillsBtn, educationBtn, skills, education);

  skillsBtn.addEventListener("click", () => {
    setActive(skillsBtn, educationBtn, skills, education);
  });

  educationBtn.addEventListener("click", () => {
    setActive(educationBtn, skillsBtn, education, skills);
  });
});
