"use strict";

// Skapar den lilla rutan längst uppe till höger som säger att admin är inloggad.
function createAdminParagraph() {
    // Skapar ett nytt element.
    let p = document.createElement("p");
    // Ställer in det nya elementet.
    p.style.display = "inline";
    p.style.float = "right";
    p.style.marginTop = "20px";
    p.style.padding = "10px";
    p.innerText = "Inloggad som admin!";
    p.style.border = "1px solid #3438f5";
    p.style.borderRadius = "5px";
    p.style.color = "white";
    p.style.backgroundColor = "#1a1a1d";
    p.style.font = "bold 15px Arial";
    // Lägger sist till elementen hos DOM:en.
    document.body.getElementsByTagName("header").item(0).appendChild(p);
}

// Skapar länk för att lägga till nya medlemmar på webbsidan.
function createAdminJoinLink() {
    // Skapar ett nytt element.
    let a = document.createElement("a");
    // Ställer in det nya elementet.
    a.innerText = "Ny medlem";
    a.setAttribute("href", "/new-member");
    // Lägger sist till elementet hos DOM:en.
    document.body.getElementsByTagName("nav").item(0).appendChild(a);
}

// Är admin inloggad (finns admin i localStorage?) skapar vi allt som ska vara tillgängligt för admin.
if (localStorage.getItem(adminUsername) !== null) {
    createAdminParagraph();
    createAdminJoinLink();
}
