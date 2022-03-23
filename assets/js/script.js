$(document).ready(function () {
    $(".ham").click(function () {
        $(".banner-menus-container").slideToggle();
        $(this).toggleClass("cross");
    });
});

let title = document.querySelectorAll(".banner-menus li span");
title.forEach(i=>{
    i.addEventListener('click',function(){
        title.forEach(i=>{
            i.nextSibling.nextSibling.style.display = "none";
        })
i.nextSibling.nextSibling.style.display = "flex";
    })
})






















