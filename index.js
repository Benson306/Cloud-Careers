let clicked = true;
let menu = document.querySelector("#menu");

menu.onclick = function(){
    
    let div = document.querySelector(".drop");

    if (clicked === true){
        
        div.style.visibility = 'visible';
        div.style.height = '115px';

        clicked = false;
    }else if(clicked === false){
        div.style.visibility = 'hidden';
        div.style.height = '0px';
        
        clicked = true;
    }
    
}