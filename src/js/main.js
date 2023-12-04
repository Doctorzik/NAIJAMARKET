import { apiFetch, qs } from "./mjs/utilities.mjs";

const url = "https://dummyjson.com/quotes?skip&limit=100";
const news =
  "https://newsapi.org/v2/everything?q=keyword&apiKey=678408a4a7694b959f758ca67a715a54";

fetchQoutes();
fetchnews;
async function fetchQoutes() {
  const data = await apiFetch(url);

  const randomIndex = Math.floor(Math.random() * data.quotes.length);

  const randomQoute = data.quotes[randomIndex].quote;
  const author = data.quotes[randomIndex].author;

  const quotele = (document.createComment("quote").innerHtml = randomQoute);
  const p = (document.createComment("p").innerHtml = author);
  qs("#quote-div").append(quotele, p);
}
async function fetchnews() {
  const newsresult = await apiFetch(news);

  qs("#news").textContent = newsresult.articles[0].content;
}
