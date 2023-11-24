const navigationUl = document.getElementById("nav-ul");

const hamburgerbtn = document.getElementById("hamburgerbtn");
hamburgerbtn.addEventListener("click", () => {
  navigationUl.classList.toggle("open");
});
