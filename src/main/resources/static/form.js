"use strict";

let username = document.getElementById("username");
let password = document.getElementById("password");

username.addEventListener("focusin", (e) => {
    if (e.target.getAttribute("placeholder") !== "") {
        e.target.setAttribute("placeholder", "");
        e.target.style.backgroundColor = "#FFFFFF";
        e.target.style.borderColor = "#3438f5";
    }
});

password.addEventListener("focusin", (e) => {
    if (e.target.getAttribute("placeholder") !== "") {
        e.target.setAttribute("placeholder", "");
        e.target.style.backgroundColor = "#FFFFFF";
        e.target.style.borderColor = "#3438f5";
    }
});

username.addEventListener("focusout", (e) => {
    if (e.target.getAttribute("placeholder") === "") {
        e.target.setAttribute("placeholder", "Användarnamn");
    }
});

password.addEventListener("focusout", (e) => {
    if (e.target.getAttribute("placeholder") === "") {
        e.target.setAttribute("placeholder", "Lösenord");
    }
});
