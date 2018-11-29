let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu-list");

menuIcon.addEventListener("click", fadeMenu);
menu.style.transform = "translateX(300px)";

function fadeMenu(){

    console.log("test");
    if (menu.style.transform === "translateX(300px)")
    {
        menu.style.transform = "translateX(0px)";

    } else{
        menu.style.transform = "translateX(300px)";
    }
}
