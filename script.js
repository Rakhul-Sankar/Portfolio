// ================= MOBILE MENU =================
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {

  // ================= ABOUT TABS =================
  const skillsBtn = document.getElementById("skills-btn");
  const educationBtn = document.getElementById("education-btn");
  const skills = document.getElementById("skills");
  const education = document.getElementById("education");

  if (skillsBtn && educationBtn && skills && education) {
    const setActive = (activeBtn, inactiveBtn, showEl, hideEl) => {
      showEl.classList.remove("hidden");
      hideEl.classList.add("hidden");

      activeBtn.classList.add("text-red-600", "after:scale-x-100");
      activeBtn.classList.remove("text-gray-400", "after:scale-x-0");

      inactiveBtn.classList.add("text-gray-400", "after:scale-x-0");
      inactiveBtn.classList.remove("text-red-600", "after:scale-x-100");
    };

    setActive(skillsBtn, educationBtn, skills, education);
    skillsBtn.onclick = () => setActive(skillsBtn, educationBtn, skills, education);
    educationBtn.onclick = () => setActive(educationBtn, skillsBtn, education, skills);
  }

  // ================= DARK MODE =================
  const html = document.documentElement;
  const themeIcon = document.getElementById("themeIcon");

  // Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    html.classList.add("dark");
    themeIcon?.classList.replace("fa-moon", "fa-sun");
  }

  window.toggleDarkMode = () => {
    const isDark = html.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (themeIcon) {
      themeIcon.classList.toggle("fa-moon", !isDark);
      themeIcon.classList.toggle("fa-sun", isDark);
    }
  };
});
