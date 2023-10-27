"use strict";

let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");

username.addEventListener("focusin", () => {
    if (username.getAttribute("placeholder") !== "") {
        username.setAttribute("placeholder", "");
    }
});

username.addEventListener("focusout", () => {
    if (username.getAttribute("placeholder") === "") {
        username.setAttribute("placeholder", "Användarnamn");
    }
});

password.addEventListener("focusin", () => {
    if (password.getAttribute("placeholder") !== "") {
        password.setAttribute("placeholder", "");
    }
});

password.addEventListener("focusout", () => {
    if (password.getAttribute("placeholder") === "") {
        password.setAttribute("placeholder", "Lösenord");
    }
});
