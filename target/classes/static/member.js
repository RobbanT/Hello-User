if (localStorage.getItem("admin") !== null) {
    let li = document.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        let button = document.createElement("button");
        button.style.padding = "8px";
        button.style.backgroundImage = "url('remove.png')";
        button.margin = "0";
        button.style.borderStyle = "none";
        button.style.float = "right";
        button.style.backgroundColor = "transparent";
        button.addEventListener("click", () => {});
        li.item(i).appendChild(button);
    }
}
