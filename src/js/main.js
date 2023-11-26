import { doc } from "prettier";
import { addSum , apiFetch, setLocalStorage, getlocalStorage, qs } from "./mjs/utilities.mjs";


const url = "https://dummyjson.com/quotes?skip&limit=100"

fetchQoutes()

async function  fetchQoutes(){
    const  data =  await apiFetch(url)

 console.log(data.quotes)
 const randomIndex = Math.floor(Math.random() * data.quotes.length );

 const randomQoute =  data.quotes[randomIndex].quote
 const author =  data.quotes[randomIndex].author
 console.log(randomQoute )
 console.log(author )
    const me = document.createElement("div")
     const      quotele = document.createComment("quote").innerHtml =  randomQoute
             const p  = document.createComment("p").innerHtml = author
    qs("#quote-div").append(quotele, p)

}
