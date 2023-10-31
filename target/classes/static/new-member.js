"use strict";

// Input-fält exklusivt till new-member-sidan.
let passwordConfirm = document.getElementById("passwordConfirm");

// Lägger till event-lyssnare till fältet.
passwordConfirm.addEventListener("focusin", (e) => removePlaceholder(e));
passwordConfirm.addEventListener("focusout", (e) => addPlaceholder(e, "Bekräfta Lösenord"));

// Sker massa olika kontroller här som kollar om användaren har matat in giltiga värden.
document.getElementById("create").addEventListener("click", () => {
    if (username.value === "") {
        username.style.backgroundColor = "#FAF1F5";
        username.style.borderColor = "#C32B57";
        username.setAttribute("placeholder", "Felaktigt Användarnamn!");
        return;
    }
    if (password.value === "") {
        password.style.backgroundColor = "#FAF1F5";
        password.style.borderColor = "#C32B57";
        password.setAttribute("placeholder", "Felaktigt Lösenord!");
        return;
    }
    if (passwordConfirm.value === "") {
        passwordConfirm.style.backgroundColor = "#FAF1F5";
        passwordConfirm.style.borderColor = "#C32B57";
        passwordConfirm.setAttribute("placeholder", "Felaktigt Lösenord!");
        return;
    }
    if (username.value === adminUsername) {
        username.value = "";
        username.style.backgroundColor = "#FAF1F5";
        username.style.borderColor = "#C32B57";
        username.setAttribute("placeholder", "Bara en " + adminUsername + " får existera! :)");
        return;
    }
    if (password.value !== passwordConfirm.value) {
        password.value = "";
        password.style.backgroundColor = "#FAF1F5";
        password.style.borderColor = "#C32B57";
        password.setAttribute("placeholder", "Lösenord ej lika!");
        passwordConfirm.value = "";
        passwordConfirm.style.backgroundColor = "#FAF1F5";
        passwordConfirm.style.borderColor = "#C32B57";
        passwordConfirm.setAttribute("placeholder", "Lösenord ej lika!");
        return;
    }
    document.getElementsByTagName("form").item(0).submit();
});
