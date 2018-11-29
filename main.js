let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu");

menuIcon.addEventListener("click", fadeMenu);

function fadeMenu(){
    if (menu.style.visibility === "visible"){
        menu.style.visibility = "hidden";
    } else{
        menu.style.visibility = "visible" ;
        menu.style.marginRight = "-200px";
    }
    var margin = menu.style.marginRight.slice(0,-2)
    console.log(margin);
    while (margin < 0){
        console.log(menu.style.marginRight);
        margin++;
        menu.style.marginRight = margin + "px";
    }
}