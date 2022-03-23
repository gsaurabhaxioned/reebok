$(document).ready(function () {
    $(".ham").click(function () {
        $(".banner-menus-container").slideToggle();
        $(this).toggleClass("cross");
    });
});

let title = document.querySelectorAll(".banner-menus li span");
title.forEach(i=>{
    i.addEventListener('click',function(){
        this.nextSibling.style.display = "flex";
    })
})






















