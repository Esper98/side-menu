import '../scss/main.scss'

let menuIcon = document.querySelector("#menu-icon");
let menu = document.querySelector("#menu");

menuIcon.addEventListener("click", fadeMenu);

function fadeMenu(){
    menuIcon.classList.toggle("change");
    if (menu.classList.contains("open-menu"))
    {
        menu.classList.remove("open-menu");
    } else{
        menu.classList.add("open-menu");
    }
}

document.onclick = function(e){
    if (window.innerWidth <= 800){
        console.log(e.target.id);
        if(!e.target.id.includes('menu')){
            if (menu.classList.contains("open-menu"))
            {
                menu.classList.remove("open-menu");
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