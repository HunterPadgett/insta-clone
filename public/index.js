document.addEventListener("DOMContentLoaded", function () {
 // mobile menu btn and hidden section
 const mobileMenubtn = document.querySelector(".mobile-menu-button");
 const mobileMenu = document.querySelector(".mobile-menu");
 // comment toggle and comment form
 const commentToggleBtns = document.querySelectorAll("#toggle-comment-area");
 // const commentAreas = document.querySelectorAll('#add-comment-form');

 // listener for mobile menu to hide/show toggle
 mobileMenubtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
 });

 // When the user scrolls the page, store the scroll position in local storage
 window.addEventListener("scroll", () => {
  localStorage.setItem("scrollPosition", window.pageYOffset);
 });

 //event listener for comment areas to toggle hidden class on adding a comment form
 commentToggleBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
   const commentArea =
    btn.parentNode.parentNode.parentNode.querySelector("#add-comment-form");
   commentArea.classList.toggle("hidden");
  });
 });

 // When the page loads, check if there's a stored scroll position and scroll to that position
 window.addEventListener("load", () => {
  const scrollPosition = localStorage.getItem("scrollPosition");
  if (scrollPosition) {
   window.scrollTo(0, scrollPosition);
   localStorage.removeItem("scrollPosition"); // Remove the stored scroll position to prevent it from being used again
  }
 });
});
