"use strict";

// När vi trycker på "Logga in" så kollar vi om användarnamnet och lösenordet stämmer för vår admin.
// Notera att man bara kan logga in som admin och inte som någon annan medlem.
document.getElementById("login").addEventListener("click", () => {
    // Stämmer användarnamnet och lösenordet?
    if (username.value === adminUsername && password.value === adminPassword) {
        if (localStorage.getItem(adminUsername) === null) {
            // Är admin inte redan inloggad sparar vi ner vår admins uppgifter i localstorage.
            localStorage.setItem(adminUsername, adminPassword);
            setNormalStyle(username);
            setNormalStyle(password);
            document.getElementsByTagName("form").item(0).submit();
        } else {
            // Är admin redan inloggad informeras admin om det.
            setErrorStyle(username, "Du är redan inloggad");
            setErrorStyle(password, "som admin! :)");
        }
        return;
    }
    // Stämmer inte användarnamnet?
    if (username.value !== adminUsername) {
        setErrorStyle(username, "Felaktigt Användarnamn!");
    }
    //Stämmer inte lösenordet?
    if (password.value !== adminPassword) {
        setErrorStyle(password, "Felaktigt Lösenord!");
    }
});
