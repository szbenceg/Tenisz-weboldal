$( window ).scroll(function() {
    if(300 < $(document).scrollTop()){
        $("#header-container").css("background-color", "rgba(255, 255, 255)");
    }else{
        $("#header-container").css("background-color", "rgba(255, 255, 255, 0.7)");
    }
});

$(document).ready(function(){

    /*Mobile header*/

    var mobilePositions = {};

    mobilePositions["skills-title"] = $("#skills-title").offset().top;
    mobilePositions["skills-title"] = $("#skills-title").offset().top;
    mobilePositions["owners-title"] = $("#owners-title").offset().top;
    mobilePositions["footer-title"] = $("#footer-title").offset().top;



    function scroll(x){
        $("html, body").animate({
            scrollTop: x - ($(window).height() / 3) 
        }, 1000);
    }

    $(".menu-content li a").click(function(){

        if($(this).attr("id") == "mobile-scroll-top"){
            scroll(-100);
        }
        if($(this).attr("id") == "mobile-scroll-skills"){
            scroll(mobilePositions["skills-title"]);
        }
        if($(this).attr("id") == "mobile-scroll-owners-title"){
            scroll(mobilePositions["owners-title"]);
        }
        if($(this).attr("id") == "mobile-scroll-contact"){
            scroll($(document).height() + 100);
        }
    });

    var mobileUnderlinedMenuPoints = [];
    $("#mobile-scroll-top").attr("class", "menu-underline");
    mobileUnderlinedMenuPoints.push("#mobile-scroll-top");

    function mobileRemoveUnderline(){
        for(var i=0; i<mobileUnderlinedMenuPoints.length; i++){
            $(mobileUnderlinedMenuPoints[i]).attr("class", "hover-border");
            mobileUnderlinedMenuPoints.splice(mobileUnderlinedMenuPoints.indexOf(mobileUnderlinedMenuPoints[i]),1);
        }
    }


    $(window).scroll(function(event){

        var currentPos = $(this).scrollTop() + $(window).height();

        if(currentPos < mobilePositions["skills-title"]){
            mobileRemoveUnderline();
            $("#mobile-scroll-top").attr("class", "menu-underline");
            mobileUnderlinedMenuPoints.push("#mobile-scroll-top");
        }

        if(currentPos > mobilePositions["skills-title"] && currentPos < mobilePositions["owners-title"]){

            mobileRemoveUnderline();
            $("#mobile-scroll-skills").attr("class", "menu-underline");
            mobileUnderlinedMenuPoints.push("#mobile-scroll-skills");

        }
        if(currentPos > mobilePositions["owners-title"]){

            mobileRemoveUnderline();
            $("#mobile-scroll-owners-title").attr("class", "menu-underline");
            mobileUnderlinedMenuPoints.push("#mobile-scroll-owners-title");
        }
        if(currentPos + 80 > $(document).height()){
            mobileRemoveUnderline();
            $("#mobile-scroll-contact").attr("class", "menu-underline");
            mobileUnderlinedMenuPoints.push("#mobile-scroll-contact");
        }
    });


    /*Computer header*///-----------------------------------------------------------------------------------------------

    var underlinedMenuPoints = [];
    $("#scroll-top").attr("class", "menu-underline");
    underlinedMenuPoints.push("#scroll-top");


    var positions = {};

    positions["home-page"] = $("#about-us-title").offset().top;
    positions["about-us-title"] = $("#about-us-title").offset().top;
    positions["skills-title"] = $("#skills-title").offset().top;
    positions["owners-title"] = $("#owners-title").offset().top;
    positions["footer-title"] = $("#footer-title").offset().top;

    $("#menu-points a").click(function(){

        if($(this).attr("id") == "scroll-top"){
            $("html, body").animate({
                scrollTop: 0
            }, 1000);
        }else{
            $("html, body").animate({
                scrollTop: $("." + $(this).attr("id")).offset().top - 200
            }, 1000);
        }
    });


    function removeUnderline(){
        for(var i=0; i<underlinedMenuPoints.length; i++){
            $(underlinedMenuPoints[i]).attr("class", "hover-border");
            underlinedMenuPoints.splice(underlinedMenuPoints.indexOf(underlinedMenuPoints[i]),1);
        }
    }


    $(window).scroll(function(event){

        var currentPos = $(this).scrollTop();

        if(currentPos < positions["home-page"]){
            removeUnderline();
            $("#scroll-top").attr("class", "menu-underline");
            underlinedMenuPoints.push("#scroll-top");
        }

        if(currentPos > positions["about-us-title"]){

            removeUnderline();
            $("#scroll-skills").attr("class", "menu-underline");
            underlinedMenuPoints.push("#scroll-skills");

        }
        if(currentPos > positions["skills-title"] + 150){

            removeUnderline();
            $("#scroll-owners-title").attr("class", "menu-underline");
            underlinedMenuPoints.push("#scroll-owners-title");
        }
        if(currentPos + 30 > positions["owners-title"]){

            removeUnderline();
            $("#scroll-contact").attr("class", "menu-underline");
            underlinedMenuPoints.push("#scroll-contact");
        }
    });

    
});