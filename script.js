// ================= MOBILE MENU =================
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {

  // ================= ABOUT TABS =================
  const skillsBtn = document.getElementById("skills-btn");
  const educationBtn = document.getElementById("education-btn");
  const skills = document.getElementById("skills");
  const education = document.getElementById("education");

  function setActive(activeBtn, inactiveBtn, showEl, hideEl) {
    showEl.classList.remove("hidden");
    hideEl.classList.add("hidden");

    activeBtn.classList.remove("after:scale-x-0", "text-gray-400");
    activeBtn.classList.add("after:scale-x-100", "text-red-600");

    inactiveBtn.classList.remove("after:scale-x-100", "text-red-600");
    inactiveBtn.classList.add("after:scale-x-0", "text-gray-400");
  }

  // Default tab
  setActive(skillsBtn, educationBtn, skills, education);

  skillsBtn.addEventListener("click", () => {
    setActive(skillsBtn, educationBtn, skills, education);
  });

  educationBtn.addEventListener("click", () => {
    setActive(educationBtn, skillsBtn, education, skills);
  });

  // ================= DARK MODE =================
  const html = document.documentElement;
  const themeIcon = document.getElementById("themeIcon");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  window.toggleDarkMode = function () {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      localStorage.setItem("theme", "light");
      themeIcon.classList.replace("fa-sun", "fa-moon");
    }
  };

});
