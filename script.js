  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  }

  function showTab(tab) {
    const skills = document.getElementById("skills");
    const education = document.getElementById("education");
    const skillsBtn = document.getElementById("skills-btn");
    const educationBtn = document.getElementById("education-btn");

    if (tab === "skills") {
      skills.classList.remove("hidden");
      education.classList.add("hidden");

      skillsBtn.classList.add("border-red-600");
      skillsBtn.classList.remove("border-transparent", "text-gray-400");

      educationBtn.classList.remove("border-red-600");
      educationBtn.classList.add("border-transparent", "text-gray-400");
    } else {
      education.classList.remove("hidden");
      skills.classList.add("hidden");

      educationBtn.classList.add("border-red-600");
      educationBtn.classList.remove("border-transparent", "text-gray-400");

      skillsBtn.classList.remove("border-red-600");
      skillsBtn.classList.add("border-transparent", "text-gray-400");
    }
  }

