document.addEventListener("DOMContentLoaded", function () {
 // mobile menu btn and hidden section
 const mobileMenubtn = document.querySelector(".mobile-menu-button");
 const mobileMenu = document.querySelector(".mobile-menu");

 // listener for mobile menu to hide/show toggle
 mobileMenubtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
 });
});
