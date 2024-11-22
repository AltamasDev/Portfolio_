$(document).ready(function(){
    $("#menu_icon").click(function(){
       var a = document.getElementById("navbar-ul");
        if(a.style.display != "flex"){
            a.style.display= "flex";
        } 

        else{
            a.style.display= "none";
        }
    });
});