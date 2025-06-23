"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mockBackend_js_1 = require("./mockBackend.js");
let form = document.getElementById("signup-form");
let errors = document.getElementById("signup-errors");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    errors.innerHTML = "";
    let fullName = form.elements.namedItem("fullName").value;
    let email = form.elements.namedItem("email").value;
    let password = form.elements.namedItem("password").value;
    let confirmPassword = form.elements.namedItem("confirmPassword").value;
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
    let ok = (0, mockBackend_js_1.signUpUser)(email, password);
    if (!ok) {
        errors.innerHTML = "<p class='error'>Email already exists</p>";
    }
    else {
        alert("Sign up successful!");
        form.reset();
    }
});
