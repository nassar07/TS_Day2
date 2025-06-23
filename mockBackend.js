"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUser = signUpUser;
exports.signInUser = signInUser;
let users = [];
function signUpUser(email, password) {
    let exist = users.find(user => user.email === email);
    if (exist)
        return false;
    users.push({ email, password });
    return true;
}
function signInUser(email, password) {
    return users.some(user => user.email === email && user.password === password);
}
