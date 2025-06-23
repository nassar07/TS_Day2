import { signInUser } from "./mockBackend.js";

let form = document.getElementById("signin-form") as HTMLFormElement;
let errors = document.getElementById("signin-errors") as HTMLDivElement;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errors.innerHTML = "";

  let email = (form.elements.namedItem("email") as HTMLInputElement).value;
  let password = (form.elements.namedItem("password") as HTMLInputElement).value;

  if (email == "" || password == "") {
    errors.innerHTML = "<p class='error'>All fields are required</p>";
    return;
  }

  if (!email.includes("@")) {
    errors.innerHTML = "<p class='error'>Email is not valid</p>";
    return;
  }

  let ok = signInUser(email, password);
  if (!ok) {
    errors.innerHTML = "<p class='error'>Wrong email or password</p>";
  } else {
    alert("Signed in successfully!");
    form.reset();
  }
});
