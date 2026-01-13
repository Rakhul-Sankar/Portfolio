// ================= MOBILE MENU =================
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  if (menu) menu.classList.toggle("hidden");
}

// ================= THEME TOGGLE =================
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById("themeIcon");

  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
}

// ================= LOAD SAVED THEME =================
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  const icon = document.getElementById("themeIcon");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");
  }
});
