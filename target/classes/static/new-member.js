"use strict";

// Input-fält exklusivt till new-member-sidan.
let passwordConfirm = document.getElementById("passwordConfirm");

// Lägger till event-lyssnare till fältet.
passwordConfirm.addEventListener("focusin", (e) => removePlaceholder(e.target));
passwordConfirm.addEventListener("focusout", (e) => addPlaceholder(e.target, "Bekräfta Lösenord"));

// Sker massa olika kontroller här som kollar om användaren har matat in giltiga värden.
document.getElementById("create").addEventListener("click", () => {
    let valid = true;
    // Har användaren inte skrivit in något användarnamn?
    if (username.value === "") {
        setErrorStyle(username, "Felaktigt Användarnamn!");
        valid = false;
    }
    // Har användaren skrivit in admins användarnamn?
    if (username.value === adminUsername) {
        setErrorStyle(username, "Bara en " + adminUsername + " får existera! :)");
        valid = false;
    }
    // Har användaren inte skrivit in något lösenord?
    if (password.value === "") {
        setErrorStyle(username, "Felaktigt Lösenord!");
        valid = false;
    }
    // Har användaren inte bekräftat något lösenord?
    if (passwordConfirm.value === "") {
        setErrorStyle(passwordConfirm, "Felaktigt Lösenord!");
        valid = false;
    }
    // Stämmer inte lösenorden i de två input-fälten överens?
    if (passwordConfirm.value !== password.value) {
        setErrorStyle(password, "Lösenord ej lika!");
        setErrorStyle(passwordConfirm, "Lösenord ej lika!");
        valid = false;
    }
    // Registrera bara en ny medlem om alla tester går igenom.
    if (valid) {
        document.getElementsByTagName("form").item(0).submit();
    }
});
