"use strict";

// Våra input-fält.
let username = document.getElementById("username");
let password = document.getElementById("password");

// Återställer ett input-fält efter att man har angivit ett felaktigt värde.
function setNormalStyle(inputField, placeholder) {
    inputField.value = "";
    inputField.setAttribute("placeholder", placeholder);
    inputField.style.backgroundColor = "#FFFFFF";
    inputField.style.borderColor = "#3438f5";
}

// Markerar i input-fältet att man har angivit ett ogiltigt värde.
function setErrorStyle(inputField, placeholder) {
    inputField.value = "";
    inputField.style.backgroundColor = "#FAF1F5";
    inputField.style.borderColor = "#C32B57";
    inputField.setAttribute("placeholder", placeholder);
}

// Tar bort input-fältets placeholder om fältet får fokus när det är tomt.
function removePlaceholder(inputField) {
    if (inputField.getAttribute("placeholder") !== "" && inputField.value === "") {
        setNormalStyle(inputField, "");
    }
}

// Lägger till placeholder om input-fältet är tomt när fältet förlorar fokus.
function addPlaceholder(inputField, placeholder) {
    if (inputField.getAttribute("placeholder") === "" && inputField.value === "") {
        inputField.setAttribute("placeholder", placeholder);
    }
}

// Lägger till eventlyssnare.
username.addEventListener("focusin", (e) => removePlaceholder(e.target));
password.addEventListener("focusin", (e) => removePlaceholder(e.target));
username.addEventListener("focusout", (e) => addPlaceholder(e.target, "Användarnamn"));
password.addEventListener("focusout", (e) => addPlaceholder(e.target, "Lösenord"));
