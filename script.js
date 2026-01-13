// ================= MOBILE MENU =================
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("hidden");
}

// ================= THEME TOGGLE =================
const html = document.documentElement;
const themeIcon = document.getElementById("themeIcon");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  html.classList.remove("dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
} else {
  html.classList.add("dark");
  themeIcon.classList.replace("fa-sun", "fa-moon");
}

function toggleTheme() {
  const isDark = html.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");

  themeIcon.classList.toggle("fa-moon", isDark);
  themeIcon.classList.toggle("fa-sun", !isDark);
}
