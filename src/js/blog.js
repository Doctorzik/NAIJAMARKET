import { setClick, qs,apiFetch} from "./mjs/utilities.mjs";

const news =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=678408a4a7694b959f758ca67a715a54";

  async function fetchNews(){
    const data = await apiFetch(news)
   let cards =  qs(".news")
 
   data.articles.forEach(headline => {
   
    let card = document.createElement("section");
    let portrait = document.createElement("img");
    let title = document.createElement("h3");
    let description = document.createElement("p");
    let source = document.createElement("p");

    let sourcesite = document.createElement("a");

    portrait.setAttribute("src", headline.urlToImage);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "250");
    portrait.setAttribute("height", "250");
    portrait.setAttribute("alt", headline.name);
   
    title.textContent = headline.title;
    description.textContent = `${headline.description}`;
    source.textContent = `Source: ${headline.source.name}`;
    sourcesite.innerHTML = `<a href="headline.url" target="_blank">Read More</a>`;
  
    card.append(
      portrait,
      title,
      description,
      source,
      sourcesite,
     
    );

    cards.appendChild(card);
   });
  }

  fetchNews()