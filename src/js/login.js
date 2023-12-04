import { setClick, qs, setLocalStorage } from "./mjs/utilities.mjs";

const name = localStorage.getItem("name");

if (name) {
  qs(
    ".log-message"
  ).textContent = `${name} You are already registerds: Please Login`;

  qs("#title").textContent = "Sign In";
  qs("#register").style.display = "none";
  qs("#nameField").style.display = "none";
  const login = (qs("#login").style.display = "block");

  setClick("#login", loginuser);
}
function loginuser() {
  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");

  // if(email.toLocaleLowerCase === )
  const myForm = qs("#myForm");
  const formInfo = new FormData(myForm);

  const me = [];
  for (let key of formInfo.keys()) {
    me.push(formInfo.get(key));
  }

  console.log(me);
  if (me[1] === email && me[2] === password) {
    myForm.reset();
    window.location.href = "../index.html";
  } else {
    window.alert("Password or Email Incorrect: Kindly Try again");
    myForm.reset();
  }
}

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

  const me = [];
  for (let key of formInfo.keys()) {
    me.push(formInfo.get(key));
  }
  setLocalStorage("name", me[0]);
  setLocalStorage("email", me[1]);
  setLocalStorage("password", me[2]);

  myForm.reset();
  qs(
    ".log-message"
  ).textContent = `${me[0]} You have successfully registerd, Kindly Signin in to continue`;
  location.reload();
}
// const myForm = qs("#myForm").setAttribute("action", "../index.html")
