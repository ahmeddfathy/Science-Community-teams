
let icon = document.getElementById("icon_aside");
let aside_Phone = document.getElementById("icon_aside_mobile");
let asideBar = document.getElementById('asidebar2');
let windowWidth =  document.body.clientWidth;
window.onresize = function(){
if (windowWidth < 900){
    icon.onclick = function(){
        asideBar.classList.toggle("active");
    }
    
}

}

window.onload = function(){
    if (windowWidth < 900){
        icon.onclick = function(){
            asideBar.classList.toggle("active");
        }
    }
  
    }


    window.onresize = function(){
        if (windowWidth < 900){
            aside_Phone.onclick = function(){
                asideBar.classList.toggle("active");
            }
            
        }
        
        }
        
        window.onload = function(){
            if (windowWidth < 900){
                aside_Phone.onclick = function(){
                    asideBar.classList.toggle("active");
                }
            }
          
            }
        