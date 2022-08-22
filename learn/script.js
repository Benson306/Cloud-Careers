let menu = document.querySelector("#menu");
let toggle = true;

menu.onclick = function(){

    let drop = document.querySelector(".drop")

    if(toggle === true){

        drop.style.visibility = "visible";
        drop.style.height="80px";

        toggle = false;

    }else if(toggle === false){

        drop.style.visibility = "hidden";
        drop.style.height="0px";

        toggle = true;

    }

}