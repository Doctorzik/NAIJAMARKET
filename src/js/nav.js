import { setClick, qs } from "./mjs/utilities.mjs";

setClick("#hamburgerbtn", () => qs("#nav-ul").classList.toggle("open"));
// let keyApi = "ki2sYRoDItIfI8rs+tWU8Q==fsZwz6dx4j7S2zb0"
// let options = {
//     method: 'GET',
//     headers: { 'x-api-key': 'keyApi' }
//   }

//   const url = "https://api.quotable.io"

//   var url = 'https://newsapi.org/v2/everything?' +
//   'q=Nigeria&' +
//   'from=2023-11-25&' +
//   'sortBy=popularity&' +
//   'apiKey=678408a4a7694b959f758ca67a715a54';
