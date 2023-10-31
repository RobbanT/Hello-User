"use strict";

// Är admin inloggad? Då skapar vi en ta bort-knapp för alla medlemmar.
if (localStorage.getItem("admin") !== null) {
    // En lista med alla vår medlemmar i listan.
    let li = document.getElementsByTagName("li");
    // Vi loopar igenom listan och lägger till en knapp för varje medlem.
    for (let i = 0; i < li.length; i++) {
        // Alla medlemmar får en ta bort-knapp förutom admin. Vi vill ju inte att man ska kunna ta bort admin som medlem.
        if (li.item(i).getAttribute("id") !== "admin") {
            // Skapar en ny knapp.
            let button = li.item(i).getElementsByTagName("a").item(0);
            // Ställer in knappen.
            button.style.display = "inline";
            button.style.backgroundImage = "url('remove.png')";
            button.style.padding = "8px";
            button.style.borderRadius = "9px";
            button.style.border = "1px solid red";
            button.style.float = "right";
            button.addEventListener("mouseover", () => {
                button.style.backgroundColor = "red";
            });
            button.addEventListener("mouseout", () => {
                button.style.backgroundColor = "transparent";
            });
            button.setAttribute("hidden", false);
            // Lägger till sist till knappen i DOM:en.
            li.item(i).appendChild(button);
        }
    }
}
