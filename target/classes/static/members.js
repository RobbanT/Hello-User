"use strict";

// Är admin inloggad? Då skapar vi en ta bort-knapp för alla medlemmar.
if (localStorage.getItem(adminUsername) !== null) {
    // En lista med alla vår medlemmar i listan.
    let li = document.getElementsByTagName("li");
    // Vi loopar igenom listan och lägger till en knapp för varje medlem.
    for (let i = 0; i < li.length; i++) {
        // Alla medlemmar får en ta bort-knapp förutom admin. Vi vill ju inte att man ska kunna ta bort admin som medlem.
        if (li.item(i).getAttribute("id") !== adminUsername) {
            // Ställer in knappen (länken).
            let button = li.item(i).getElementsByTagName("a").item(0);
            button.style.display = "inline";
            button.style.float = "right";
            button.style.backgroundImage = "url('remove.png')";
            button.style.padding = "8px";
            button.style.borderRadius = "9px";
            button.style.border = "1px solid red";
            button.addEventListener("mouseover", (e) => (e.target.style.backgroundColor = "red"));
            button.addEventListener("mouseout", (e) => (e.target.style.backgroundColor = "transparent"));
            button.setAttribute("hidden", false);
        }
    }
}
