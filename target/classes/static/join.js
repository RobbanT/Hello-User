"use strict";

let passwordConfirm = document.getElementById("passwordConfirm");

passwordConfirm.addEventListener("focusin", (e) => {
    if (e.target.getAttribute("placeholder") !== "") {
        e.target.setAttribute("placeholder", "");
        e.target.style.backgroundColor = "#FFFFFF";
        e.target.style.borderColor = "#3438f5";
    }
});

passwordConfirm.addEventListener("focusout", (e) => {
    if (e.target.getAttribute("placeholder") === "") {
        e.target.setAttribute("placeholder", "Bekräfta Lösenord");
    }
});

document.getElementById("join").addEventListener("click", () => {
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
