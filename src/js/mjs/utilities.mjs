

export async function renderWithTemplate(
    templateFn,
    parentEl,
    data,
    callback,
    position = 'afterbegin',
    clear = true
  ) {
    if (clear) {
      parentEl.innerHTML = '';
    }
    const htmlText = await templateFn(data);
  
    parentEl.insertAdjacentHTML(position, htmlText);
    if (callback) {
      callback(data);
    }
  }
 


function loadTemplate(path){
    return async ()=> {
        const res = await fetch(path)
        if (res.ok){
            const html = await res.text()
           console.log( html)
            return html
        }
    }}


    export async function loadHeaderFooter() {
        const headerTemplateFn = loadTemplate('/header.html');
        const footerTemplateFn = loadTemplate('/footer.html');
        
        const headerEl = document.querySelector('#header');
        console.log(headerEl)
        const footerEl = document.querySelector('#footer');
         console.log(footerEl)
        renderWithTemplate(headerTemplateFn, headerEl);
        renderWithTemplate(footerTemplateFn, footerEl);
      }



    // wrapper. This function returns a matching element for a document
export function qs(selector, parent = document){
  return parent.querySelector(selector)
} 

// set a listerner for both touchend and click 
export function setClick(selector, callback){

  qs(selector).addEventListener("touchend",(event)=>{
    event.preventDefault();
    callback()

  })

  qs(selector).addEventListener("click", callback);

}
 export async  function apiFetch(url) {
  try {
    const  response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // this is for testing the call
 

     return data
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
export function getlocalStorage(key){
  return JSON.parse(localStorage.getItem(key))
}
export function setLocalStorage(key, data){
  localStorage.setItem(key, data)
}


export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
} 