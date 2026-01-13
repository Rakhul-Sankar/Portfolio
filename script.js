// ================= MOBILE MENU =================
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const themeIcons = document.querySelectorAll(".theme-icon");

  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme !== "light";

  html.classList.toggle("dark", isDark);

  themeIcons.forEach(icon => {
    icon.classList.toggle("fa-sun", isDark);
    icon.classList.toggle("fa-moon", !isDark);
  });

  window.toggleDarkMode = () => {
    const nowDark = html.classList.toggle("dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");

    themeIcons.forEach(icon => {
      icon.classList.toggle("fa-sun", nowDark);
      icon.classList.toggle("fa-moon", !nowDark);
    });
  };
});
