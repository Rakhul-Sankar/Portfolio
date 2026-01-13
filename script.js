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

    // Active tab underline (Tailwind after:)
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

const html = document.documentElement;
  const themeIcon = document.getElementById("themeIcon");

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  function toggleDarkMode() {
    html.classList.toggle("dark");

    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      localStorage.setItem("theme", "light");
      themeIcon.classList.replace("fa-sun", "fa-moon");
    }
  }
