let clicked = true;
let menu = document.querySelector("#menu");

menu.onclick = function(){
    
    let div = document.querySelector(".drop");

    if (clicked === true){
        
        
        div.style.height = '115px';
        div.style.visibility = 'visible';
        
        clicked = false;
    }else if(clicked === false){
        div.style.visibility = 'hidden';
        div.style.height = '0px';
        
        clicked = true;
    }
    
}
