// ================= MOBILE MENU =================
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

// ================= ABOUT TABS =================
document.addEventListener("DOMContentLoaded", () => {
  const frontendBtn = document.getElementById("frontend-btn");
  const languagesBtn = document.getElementById("languages-btn");
  const educationBtn = document.getElementById("education-btn");

  const frontend = document.getElementById("frontend");
  const languages = document.getElementById("languages");
  const education = document.getElementById("education");

  function setActive(activeBtn, showEl) {
    // Hide all sections
    [frontend, languages, education].forEach(el => el.classList.add("hidden"));
    // Show selected section
    showEl.classList.remove("hidden");

    // Reset all buttons
    [frontendBtn, languagesBtn, educationBtn].forEach(btn => {
      btn.classList.remove("after:scale-x-100", "text-white");
      btn.classList.add("after:scale-x-0", "text-gray-400");
    });

    // Activate selected button
    activeBtn.classList.remove("after:scale-x-0", "text-gray-400");
    activeBtn.classList.add("after:scale-x-100", "text-white");
  }

  // Default tab
  setActive(frontendBtn, frontend);

  // Events
  frontendBtn.addEventListener("click", () => setActive(frontendBtn, frontend));
  languagesBtn.addEventListener("click", () => setActive(languagesBtn, languages));
  educationBtn.addEventListener("click", () => setActive(educationBtn, education));

  // ================= FOOTER YEAR =================
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ================= SCROLL EFFECTS =================
  const tabs = document.getElementById("about-tabs");
  const aboutSection = document.getElementById("about");

  window.addEventListener("scroll", () => {
    if (!tabs || !aboutSection) return;
    const aboutTop = aboutSection.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight / 4;

    if (scrollPos >= aboutTop) {
      tabs.classList.add("opacity-0", "pointer-events-none");
    } else {
      tabs.classList.remove("opacity-0", "pointer-events-none");
    }
  });

  // ================= FADE-IN SECTIONS =================
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        } else {
          entry.target.classList.remove("opacity-100", "translate-y-0");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    section.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
    observer.observe(section);
  });

  // ================= SMOOTH SCROLL =================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
