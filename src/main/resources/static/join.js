"use strict";

let username = document.getElementById("username");
let password = document.getElementById("password");
let passwordConfirm = document.getElementById("passwordConfirm");
let join = document.getElementById("join");

username.addEventListener("focusin", () => {
    if (username.getAttribute("placeholder") !== "") {
        username.setAttribute("placeholder", "");
        username.style.backgroundColor = "#FFFFFF";
        username.style.borderColor = "#3438f5";
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
        password.style.backgroundColor = "#FFFFFF";
        password.style.borderColor = "#3438f5";
    }
});

password.addEventListener("focusout", () => {
    if (password.getAttribute("placeholder") === "") {
        password.setAttribute("placeholder", "Lösenord");
    }
});

passwordConfirm.addEventListener("focusin", () => {
    if (passwordConfirm.getAttribute("placeholder") !== "") {
        passwordConfirm.setAttribute("placeholder", "");
        passwordConfirm.style.backgroundColor = "#FFFFFF";
        passwordConfirm.style.borderColor = "#3438f5";
    }
});

passwordConfirm.addEventListener("focusout", () => {
    if (passwordConfirm.getAttribute("placeholder") === "") {
        passwordConfirm.setAttribute("placeholder", "Bekräfta Lösenord");
    }
});

join.addEventListener("click", () => {
    if (username.value === "") {
        username.style.backgroundColor = "#FAF1F5";
        username.style.borderColor = "#C32B57";
        username.setAttribute("placeholder", "Felaktigt Användarnamn!");
    }
    if (password.value === "") {
        password.style.backgroundColor = "#FAF1F5";
        password.style.borderColor = "#C32B57";
        password.setAttribute("placeholder", "Felaktigt Lösenord!");
    }
    if (passwordConfirm.value === "") {
        passwordConfirm.style.backgroundColor = "#FAF1F5";
        passwordConfirm.style.borderColor = "#C32B57";
        passwordConfirm.setAttribute("placeholder", "Felaktigt Lösenord!");
    }
    document.getElementsByTagName("form").item(0).submit();
});
