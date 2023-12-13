import { apiFetch, qs, setClick } from "./mjs/utilities.mjs";

const url = "https://dummyjson.com/quotes?skip&limit=100";

fetchQoutes();

async function fetchQoutes() {
  const data = await apiFetch(url);

  const randomIndex = Math.floor(Math.random() * data.quotes.length);

  const randomQoute = data.quotes[randomIndex].quote;
  const author = data.quotes[randomIndex].author;

  const quotele = (document.createComment("quote").innerHtml = randomQoute);
  const p = (document.createComment("p").innerHtml = author);
  qs("#quote-div").append(quotele, p);
}



let slideIndex = 1;
showSlides(slideIndex);

setClick(".prev", () => plusSlides(-1))
setClick(".next", () => plusSlides(1))
setClick(".dot", () => currentSlide(1))
setClick(".dot", () => currentSlide(2))
setClick(".dot", () => currentSlide(3))
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}