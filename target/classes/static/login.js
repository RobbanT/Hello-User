// När vi trycker på "Logga in" så kollar vi om användarnamnet och lösenordet stämmer för vår admin.
// Notera att man bara kan logga in som admin och inte som någon annan medlem.
document.getElementById("login").addEventListener("click", () => {
    // Stämmer användarnamnet och lösenordet?
    if (username.value === adminUsername && password.value === adminPassword) {
        username.value = "";
        password.value = "";
        if (localStorage.getItem(adminUsername) === null) {
            // Är admin inte redan inloggad sparar vi ner vår admins uppgifter i localstorage.
            localStorage.setItem(adminUsername, adminPassword);
            username.setAttribute("placeholder", "Användarnamn");
            password.setAttribute("placeholder", "Lösenord");
            document.getElementsByTagName("form").item(0).submit();
        } else {
            // Är admin redan inloggad informeras admin om det.
            username.style.backgroundColor = "#FAF1F5";
            username.style.borderColor = "#C32B57";
            password.style.backgroundColor = "#FAF1F5";
            password.style.borderColor = "#C32B57";
            username.setAttribute("placeholder", "Du är redan inloggad");
            password.setAttribute("placeholder", "som admin! :)");
        }
        return;
    }
    // Stämmer inte användarnamnet?
    if (username.value !== "admin") {
        username.value = "";
        username.style.backgroundColor = "#FAF1F5";
        username.style.borderColor = "#C32B57";
        username.setAttribute("placeholder", "Felaktigt Användarnamn!");
    }
    //Stämmer inte lösenordet?
    if (password.value !== "admin") {
        password.value = "";
        password.style.backgroundColor = "#FAF1F5";
        password.style.borderColor = "#C32B57";
        password.setAttribute("placeholder", "Felaktigt Lösenord!");
    }
});
