import { setClick , qs} from "./mjs/utilities.mjs";

setClick("#hamburgerbtn", () => qs("#nav-ul").classList.toggle("open") );



// const navigationUl = document.getElementById("nav-ul");

// const hamburgerbtn = document.getElementById("hamburgerbtn");
// hamburgerbtn.addEventListener("click", () => {
//   navigationUl.classList.toggle("open");
// });
