document.addEventListener("DOMContentLoaded", function(){
    const navBar = document.querySelector("#navigator");
    var flat = 1;
    window.addEventListener("scroll", function(){
        if(window.pageYOffset >= 50 && flat === 1){
            navBar.classList.add('scrolled');
            flat = 0;
        }
        if(window.pageYOffset < 50 && flat === 0){
            navBar.classList.remove("scrolled");
            flat = 1;
        }
    });
}, false);

