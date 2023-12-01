import { setClick, qs } from "./mjs/utilities.mjs";

qs("#login").style.display;
qs("#register");

console.log(qs("#login"));

setClick("#signInBtn", () => {
  qs("#login").classList.remove("loginBtn");
  qs("#register").style.display = "none";
  qs("#nameField").style.display = "none";
  qs("#title").textContent = "Sign In";
  qs("#signUpBtn").classList.remove("disable");
  qs("#signInBtn").classList.add("disable");
});
setClick("#signUpBtn", () => {
  qs("#login").classList.add("loginBtn");
  qs("#register").style.display = "block";
  qs("#nameField").style.display = "";
  qs("#title").textContent = "Sign Up";
  qs("#signInBtn").classList.add("disable");
  qs("#signUpBtn").classList.remove("disable");
});
setClick("#register", handleForm);

// setClick("#login", )
function handleForm() {
  const myForm = qs("#myForm");
  const formInfo = new FormData(myForm);
  // add more things not in the form but
  // formInfo.append("", "")to add things to the form object in the form of Key value pair
  console.log(formInfo);

  const me = [];
  for (let key of formInfo.keys()) {
    console.log(key, formInfo.get(key));
    me.push(formInfo.get(key));
  }
  console.log(me);
  return me;
}
