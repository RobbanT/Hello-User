"use strict";

if (localStorage.getItem("admin") !== null) {
    let header = document.body.getElementsByTagName("header").item(0);
    let p = document.createElement("p");
    header.appendChild(p);
    p.style.display = "inline";
    p.style.float = "right";
    p.style.marginTop = "20px";
    p.style.padding = "10px";
    p.innerHTML = "Inloggad som admin!";
    p.style.border = "1px solid #3438f5";
    p.style.borderRadius = "5px";
    p.style.color = "white";
    p.style.backgroundColor = "#1a1a1d";
    p.style.font = "bold 15px Arial";
}
