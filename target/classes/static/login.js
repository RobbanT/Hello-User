"use strict";

let username = document.getElementById("username");
let password = document.getElementById("password");
let login = document.getElementById("login");

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

login.addEventListener("click", () => {
    if (username.value === "admin" && password.value === "admin") {
        localStorage.setItem("admin", "admin");
        username.value = "";
        password.value = "";
        username.setAttribute("placeholder", "Användarnamn");
        password.setAttribute("placeholder", "Lösenord");
        return;
    }
    if (username.value !== "admin") {
        username.value = "";
        username.style.backgroundColor = "#FAF1F5";
        username.style.borderColor = "#C32B57";
        username.setAttribute("placeholder", "Felaktigt Användarnamn!");
    }
    if (password.value !== "admin") {
        password.value = "";
        password.style.backgroundColor = "#FAF1F5";
        password.style.borderColor = "#C32B57";
        password.setAttribute("placeholder", "Felaktigt Lösenord!");
    }
});
