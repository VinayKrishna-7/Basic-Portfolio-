$(document).ready(function(){

    $(".menu-btn").click(function(){

        $(".nav-links").toggleClass("active");

    });

    $(".nav-links a").click(function(){

        $(".nav-links").removeClass("active");

    });

});
