import { setClick, qs,apiFetch} from "./mjs/utilities.mjs";

const news =
  "https://newsdata.io/api/1/news?apikey=pub_34716acd800ce1ab9f35122138bcfc23e5ee4&country=ng,us";
  
  fetchNews()

  async function fetchNews(){
    const data = await apiFetch(news)
    console.log(data)
   let cards =  qs(".news")
 
   data.results.forEach(headline => {
   
    let card = document.createElement("section");
    let portrait = document.createElement("img");
    let title = document.createElement("h3");
    // let description = document.createElement("p");
    let source = document.createElement("p");

    let sourcesite = document.createElement("a");

    portrait.setAttribute("src", headline.image_url);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "250");
    portrait.setAttribute("height", "250");
    portrait.setAttribute("alt", headline.name);
   
    title.textContent = headline.title;
    // description.textContent = `${headline.description}`;
    source.textContent = `Source: ${headline.creator}`;
    sourcesite.innerHTML = `<a href="headline.link" target="_blank">Read More</a>`;
  
    card.append(
      portrait,
      title,
    //   description,
      source,
      sourcesite,
     
    );

    cards.appendChild(card);
   });
  }

