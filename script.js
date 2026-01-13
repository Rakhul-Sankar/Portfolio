// ================= MOBILE MENU =================
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) {
    menu.classList.toggle("hidden");
  }
}

document.addEventListener("DOMContentLoaded", () => {

  // ================= ABOUT TABS =================
  const skillsBtn = document.getElementById("skills-btn");
  const educationBtn = document.getElementById("education-btn");
  const skills = document.getElementById("skills");
  const education = document.getElementById("education");

  if (skillsBtn && educationBtn && skills && education) {

    function setActive(activeBtn, inactiveBtn, showEl, hideEl) {
      // Toggle content
      showEl.classList.remove("hidden");
      hideEl.classList.add("hidden");

      // Active tab
      activeBtn.classList.remove("after:scale-x-0", "text-gray-400");
      activeBtn.classList.add("after:scale-x-100", "text-red-600");

      // Inactive tab
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
  }

  // ================= DARK MODE =================
  const html = document.documentElement;
  const themeIcon = document.getElementById("themeIcon");

  // Load saved theme on refresh
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.classList.add("dark");
    if (themeIcon) {
      themeIcon.classList.replace("fa-moon", "fa-sun");
    }
  }

  // Make function global for onclick
  window.toggleDarkMode = function () {
    html.classList.toggle("dark");

    const isDark = html.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (themeIcon) {
      themeIcon.classList.toggle("fa-moon", !isDark);
      themeIcon.classList.toggle("fa-sun", isDark);
    }
  };

});
