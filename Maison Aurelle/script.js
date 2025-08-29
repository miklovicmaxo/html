var homeHeader = document.getElementById("home");
var bottomHeader = document.getElementById("bottom-header");
var menuButton = document.getElementById("menu-button");

function handleMenu() {
    var screen = window.innerWidth;

    if (screen <= 1012) {
        homeHeader.style.position = "absolute";
        homeHeader.style.top = "0";
        homeHeader.style.left = "0";
        homeHeader.style.width = "100vw";
        homeHeader.style.backgroundColor = "white";
        homeHeader.style.zIndex = "100";
        homeHeader.style.boxSizing = "border-box";
        homeHeader.style.height = "auto";


        bottomHeader.style.flexDirection = "column";
        bottomHeader.style.gap = "20px";
        bottomHeader.style.alignItems = "start";
        bottomHeader.style.display = "none";

        menuButton.style.cursor = "pointer";
        menuButton.innerHTML = "Menu";
    } else {
        homeHeader.removeAttribute("style");
        bottomHeader.removeAttribute("style");

        menuButton.innerHTML = "Contact Us"
    }
}

window.addEventListener("resize", function () {
    handleMenu();
});

window.addEventListener("DOMContentLoaded", function () {
    handleMenu();
});

menuButton.addEventListener("click", function () {
    if (menuButton.innerText === "Menu") {
        bottomHeader.style.display = "flex";
        menuButton.innerHTML = "Close";
    }

    else if (menuButton.innerText === "Close") {
        bottomHeader.style.display = "none";
        menuButton.innerHTML = "Menu";
    }

})
