import '../scss/main.scss'

let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu-list");

menuIcon.addEventListener("click", fadeMenu);
menu.style.transform = "translateX(500px)";

function fadeMenu(){
    menuIcon.classList.toggle("change");
    var width = menu.width;
    if (menu.style.transform === "translateX(500px)")
    {
        menu.style.transform = "translateX(0px)";

    } else{
        menu.style.transform = "translateX(500px)";
    }
}

document.onclick = function(e){
    console.log(e.target.id);
    if(!e.target.id.includes('menu')){
        if (menu.style.transform !== "translateX(500px)") {
            menu.style.transform = "translateX(500px)";
            menuIcon.classList.toggle("change");
        }
    }    
 };
