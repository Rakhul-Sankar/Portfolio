// ================= MOBILE MENU =================
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const themeIcon = document.getElementById("themeIcon");

  // ================= DEFAULT DARK MODE =================
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    html.classList.remove("dark");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    html.classList.add("dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }

  // ================= TOGGLE =================
  window.toggleDarkMode = () => {
    const isDark = html.classList.toggle("dark");

    localStorage.setItem("theme", isDark ? "dark" : "light");

    if (themeIcon) {
      themeIcon.classList.toggle("fa-sun", isDark);
      themeIcon.classList.toggle("fa-moon", !isDark);
    }
  };
});
