let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu-list");

menuIcon.addEventListener("click", fadeMenu);
menu.style.transform = "translateX(500px)";

function fadeMenu(){
    menuIcon.classList.toggle("change");
    console.log("test");
    var width = menu.width;
    console.log(menu.style);
    if (menu.style.transform === "translateX(500px)")
    {
        menu.style.transform = "translateX(0px)";

    } else{
        menu.style.transform = "translateX(500px)";
    }
}
