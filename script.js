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

  function activateTab(activeBtn, inactiveBtn, showContent, hideContent) {
    // content
    showContent.classList.remove("hidden");
    hideContent.classList.add("hidden");

    // active underline
    activeBtn.classList.add("border-red-600", "text-white");
    activeBtn.classList.remove("border-transparent", "text-gray-400");

    // inactive
    inactiveBtn.classList.remove("border-red-600", "text-white");
    inactiveBtn.classList.add("border-transparent", "text-gray-400");
  }

  // default active
  activateTab(skillsBtn, educationBtn, skills, education);

  skillsBtn.addEventListener("click", () => {
    activateTab(skillsBtn, educationBtn, skills, education);
  });

  educationBtn.addEventListener("click", () => {
    activateTab(educationBtn, skillsBtn, education, skills);
  });
});
