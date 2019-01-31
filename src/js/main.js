import '../scss/main.scss'

let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu-list");
let body = document.querySelector("body")

menuIcon.addEventListener("click", fadeMenu);

function fadeMenu(){
    menuIcon.classList.toggle("change");
    if (menu.classList.contains("open-menu"))
    {
        menu.classList.remove("open-menu");
        body.classList.remove("hide-scrollbar");
    } else{
        menu.classList.add("open-menu");
        body.classList.add("hide-scrollbar");
    }
}

document.onclick = function(e){
    if (window.innerWidth <= 800){
        console.log(e.target.id);
        if(!e.target.id.includes('menu')){
            if (menu.classList.contains("open-menu"))
            {
                menu.classList.remove("open-menu");
                body.classList.remove("hide-scrollbar");
                menuIcon.classList.toggle("change");
            }
        }  
    }  
 };

// window.onload = function () {
//     if (window.innerWidth < 801){
//         menu.classList.add("closed-menu");
//     }
// }

// window.onresize = function(event) {
//     console.log(window.innerWidth);
//     if (window.innerWidth > 800){
//         menu.classList.remove("open-menu");
//         menu.classList.remove("closed-menu");
//     } else {
//         menu.classList.add("closed-menu");
//     }
// };