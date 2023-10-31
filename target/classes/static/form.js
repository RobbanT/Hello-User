"use strict";

// Våra input-fält.
let username = document.getElementById("username");
let password = document.getElementById("password");

// Tar bort input-fältets placeholder om fältet får fokus.
function removePlaceholder(e) {
    if (e.target.getAttribute("placeholder") !== "") {
        e.target.setAttribute("placeholder", "");
        e.target.style.backgroundColor = "#FFFFFF";
        e.target.style.borderColor = "#3438f5";
    }
}

// Lägger till placeholder om input-fältet är tomt när fältet förlorar fokus.
function addPlaceholder(e, placeholder) {
    if (e.target.getAttribute("placeholder") === "") {
        e.target.setAttribute("placeholder", placeholder);
    }
}

// Lägger till eventlyssnare.
username.addEventListener("focusin", (e) => removePlaceholder(e));
password.addEventListener("focusin", (e) => removePlaceholder(e));
username.addEventListener("focusout", (e) => addPlaceholder(e, "Användarnamn"));
password.addEventListener("focusout", (e) => addPlaceholder(e, "Lösenord"));
