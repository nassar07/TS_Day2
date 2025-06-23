import { signUpUser } from "./mockBackend.js";

let form = document.getElementById("signup-form") as HTMLFormElement;
let errors = document.getElementById("signup-errors") as HTMLDivElement;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  errors.innerHTML = "";

  let fullName = (form.elements.namedItem("fullName") as HTMLInputElement).value;
  let email = (form.elements.namedItem("email") as HTMLInputElement).value;
  let password = (form.elements.namedItem("password") as HTMLInputElement).value;
  let confirmPassword = (form.elements.namedItem("confirmPassword") as HTMLInputElement).value;

  if (fullName == "" || email == "" || password == "" || confirmPassword == "") {
    errors.innerHTML = "<p class='error'>All fields are required</p>";
    return;
  }

  if (!email.includes("@")) {
    errors.innerHTML = "<p class='error'>Email is not valid</p>";
    return;
  }

  if (password.length < 8) {
    errors.innerHTML = "<p class='error'>Password must be at least 8 characters</p>";
    return;
  }

  if (password !== confirmPassword) {
    errors.innerHTML = "<p class='error'>Passwords do not match</p>";
    return;
  }

  let ok = signUpUser(email, password);
  if (!ok) {
    errors.innerHTML = "<p class='error'>Email already exists</p>";
  } else {
    alert("Sign up successful!");
    form.reset();
  }
});
