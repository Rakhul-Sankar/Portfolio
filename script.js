  // Mobile menu
  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  }

  // About tabs
  const skillsBtn = document.getElementById("skills-btn");
  const educationBtn = document.getElementById("education-btn");
  const skills = document.getElementById("skills");
  const education = document.getElementById("education");

  skillsBtn.addEventListener("click", () => {
    skills.classList.remove("hidden");
    education.classList.add("hidden");

    skillsBtn.classList.add("border-red-600");
    skillsBtn.classList.remove("text-gray-400");

    educationBtn.classList.remove("border-red-600");
    educationBtn.classList.add("text-gray-400");
  });

  educationBtn.addEventListener("click", () => {
    education.classList.remove("hidden");
    skills.classList.add("hidden");

    educationBtn.classList.add("border-red-600");
    educationBtn.classList.remove("text-gray-400");

    skillsBtn.classList.remove("border-red-600");
    skillsBtn.classList.add("text-gray-400");
  });

