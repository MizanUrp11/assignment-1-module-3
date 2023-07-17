const menu = document.getElementById("navbar-menu");
const menuBtn = document.getElementById("menu-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("h-52");
  menu.classList.toggle("py-6");
  menu.classList.toggle("h-0");
});
