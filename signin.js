"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockBackend_js_1 = require("./mockBackend.js");
let form = document.getElementById("signin-form");
let errors = document.getElementById("signin-errors");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    errors.innerHTML = "";
    let email = form.elements.namedItem("email").value;
    let password = form.elements.namedItem("password").value;
    if (email == "" || password == "") {
        errors.innerHTML = "<p class='error'>All fields are required</p>";
        return;
    }
    if (!email.includes("@")) {
        errors.innerHTML = "<p class='error'>Email is not valid</p>";
        return;
    }
    let ok = (0, mockBackend_js_1.signInUser)(email, password);
    if (!ok) {
        errors.innerHTML = "<p class='error'>Wrong email or password</p>";
    }
    else {
        alert("Signed in successfully!");
        form.reset();
    }
});
