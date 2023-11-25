

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

            return html
        }
    }}


    export async function loadHeaderFooter() {
        const headerTemplateFn = loadTemplate('/partials/header.html');
        const footerTemplateFn = loadTemplate('/partials/footer.html');
      
        const headerEl = document.querySelector('#header');
        const footerEl = document.querySelector('#footer');
        renderWithTemplate(headerTemplateFn, headerEl);
        renderWithTemplate(footerTemplateFn, footerEl);
      }

export function addSum(num, num2){
       const  me = num + num2
        return me
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