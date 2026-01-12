  /* ================= MOBILE NAV ================= */
  function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("hidden");
  }

  /* ================= ABOUT TABS ================= */
  function showTab(tab) {
    const skills = document.getElementById("skills");
    const education = document.getElementById("education");

    const skillsBtn = document.getElementById("skills-btn");
    const educationBtn = document.getElementById("education-btn");

    if (tab === "skills") {
      skills.classList.remove("hidden");
      education.classList.add("hidden");

      skillsBtn.classList.add("border-b-2", "border-red-600");
      educationBtn.classList.remove("border-b-2", "border-red-600");
    } else {
      education.classList.remove("hidden");
      skills.classList.add("hidden");

      educationBtn.classList.add("border-b-2", "border-red-600");
      skillsBtn.classList.remove("border-b-2", "border-red-600");
    }
  }

