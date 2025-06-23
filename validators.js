"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmailValid = isEmailValid;
exports.isPasswordStrong = isPasswordStrong;
exports.doPasswordsMatch = doPasswordsMatch;
exports.isRequired = isRequired;
function isEmailValid(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
function isPasswordStrong(password) {
    return password.length >= 8;
}
function doPasswordsMatch(p1, p2) {
    return p1 === p2;
}
function isRequired(value) {
    return value.trim() !== '';
}
