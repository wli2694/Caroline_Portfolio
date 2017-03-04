$(document).ready(function () {

    var fullHeader = '<div id = "headerContainerFull"><div id = "iconContainer"><a href = "#"><img class = "iconsHeader" src="images/twitter.svg"></a><a href = "#"><img class = "iconsHeader" src="images/linkedin.svg"></a><a href = "#"><img class = "iconsHeader" src="images/instagram.svg"></a></div><div id = "logoContainer"><a href = "index.html"><div><h1 id = "logo">Caroline Win</h1><h2 id = "sub-logo">UX &#38; INTERACTION DESIGNER</h2></div></a></div><nav><ul id = "navBar"> <!-- nav items need to be in backwards order due to have right set to 0px; --><li class = "primaryNav"><a id = "contactNav" class = "primaryNavItems" href = "contact.html"> CONTACT</a></li><li class = "primaryNav"><a id = "aboutNav" class = "primaryNavItems" href = "about.html"> ABOUT </a></li><li class = "primaryNav"><a id = "resumeNav" class = "primaryNavItems" href = "resume.html"> RESUME </a></li><li class = "primaryNav"><a id = "portfolioNav" class = "primaryNavItems" href = "index.html"> PORTFOLIO </a></li></ul></nav></div>'

    var collapsedHeader = '<div id="collapsedBackground"><div id = "headerContainerCollapsed"><a href = "index.html"><div id = "collapsedLogoContainer"><h1 id = "logo">Caroline Win</h1></div></a><nav><ul id = "navBarCollapsed"><li class = "primaryNav"><a id = "contactNavC" class = "primaryNavItems" href = "contact.html"> CONTACT</a></li><li class = "primaryNav"><a id = "aboutNavC" class = "primaryNavItems" href = "about.html"> ABOUT </a></li><li class = "primaryNav"><a id = "resumeNavC" class = "primaryNavItems" href = "resume.html"> RESUME </a></li><li class = "primaryNav"><a id = "portfolioNavC" class = "primaryNavItems" href = "index.html"> PORTFOLIO </a></li></ul></nav></div></div>'

    var footer = '<div id = "backToTopContainer"><div id="backToTop"><a href = "#">&uarr; Back to Top</a></div></div><div id = "footerContainer"><div id = "footer"><p id = "copyright">© 2017 Caroline Win</p></div></div>'

    var dropdown = '<div class="dropdown">' +
        '<button class="dropbtn">MENU</button>' +
        '<div class="dropdown-content">' +
        '<a href="#">PORTFOLIO</a>' +
        '<a href="#">RESUME</a>' +
        '<a href="#">ABOUT</a>' +
        '<a href="#">CONTACT</a>' +
        '</div>' +
        '</div>'


    $("header").append(fullHeader)
    $("header").append(collapsedHeader)
    $("#drop").append(dropdown)
    $("footer").append(footer)


    //Vertical Responsiveness
    //Starting screen
    $(function() {
        var startingWidth = $(window).width();

        $("#collapsedBackground").hide();
        $(".dropdown").hide();
        if(startingWidth <= 800){
            $("#navBar").hide();
            $(".dropdown").show();

            if($(window).width() < 450){
                //collapsed Header
                if((window.pageYOffset || document.documentElement.scrollTop) >= 250){
                    $("#collapsedLogoContainer").hide();
                    $("#drop").css({"position":"fixed", "width":"100%","height":"100px", "right":"0px", "top":"15px"});
                    $(".dropdown").css("width","100%");
                } else{ //full Header
                    $("#drop").css({"position":"relative", "width":"","height":"", "right":"", "top":""});
                    $(".dropdown").css("width","100%");
                    $("#logoContainer").css({"bottom":"50%"});
                }
            } else {
                $("#drop").css({"position":"relative", "width":"","height":"", "right":"", "top":""});
                $(".dropdown").css("width","30%");
                $("#logoContainer").css({"bottom":"0"});
            }
        }
        //default distance...viewport >= 1200
        var collapseHeaderDistance = 400;

        //Vertical Responsiveness while scrolling
        var collapseHeaderFunction = $(window).scroll(function(){
            var scroll = window.pageYOffset || document.documentElement.scrollTop;
            /*Collapse Header*/
            if( scroll >= collapseHeaderDistance){
                $("#collapsedBackground").show();
                $("#headerContainerFull").hide();

                //full width dropdown
                if($(window).width() < 450){
                    $("#collapsedLogoContainer").hide();
                    $("#drop").css({"position":"fixed", "width":"100%","height":"100px", "right":"0px", "top":"9px", "margin-right":"0px"});
                    $(".dropdown").css("width","100%");
                    $(".projects").css("width","calc(100% - 32px)");
                } else if($(window).width() <800) {
                    $("#drop").css({"position":"fixed", "width":"100%","height":"100px", "right":"0px", "top":"9px"});
                    $("#collapsedLogoContainer").css("top", "24px");
                }
                /*Full Header*/
            } else {
                $("#collapsedBackground").hide();
                $("#headerContainerFull").show();
                if($(window).width() < 450){
                    $("#drop").css({"position":"relative", "width":"","height":"", "right":"", "top":"", "margin-right":"0px"});
                    $(".dropdown").css("width","100%");
                    $(".projects").css("width","calc(100% - 32px)");
                } else {
                    $("#drop").css({"position":"relative", "width":"","height":"", "right":"", "top":""});
                    $(".dropdown").css("width","30%");
                }

            }
        })

        //Horizontal Responsiveness
        $(window).bind('resize', function() {
            var windowwidth = $(window).width();
            if(windowwidth > 1200){
                $("#sub-logo").show();
                $("#iconContainer").show();
                $("#navBar").show();
                $("#navBarCollapsed").show();
                $(".dropdown").hide();

                collapseHeaderDistance = 400;
                collapseHeaderFunction();
            } else if(windowwidth > 800) {
                $("#sub-logo").show();
                $("#iconContainer").show();
                $("#navBar").show();
                $("#navBarCollapsed").show();
                $(".dropdown").hide();

                collapseHeaderDistance = 300;
                collapseHeaderFunction();
            } else {
                $("#sub-logo").hide();
                $("#iconContainer").hide();
                $("#navBar").hide();
                $("#navBarCollapsed").hide();
                $(".dropdown").show();

                if(windowwidth < 450){
                    $("#logoContainer").css("width", "100%");
                    $("#logo").css({"display":"", "text-align":"center"});
                    if((window.pageYOffset || document.documentElement.scrollTop) < 250){
                        $("#drop").css({"position":"relative", "width":"","height":"", "right":"", "top":""});
                        $(".dropdown").css("width","100%");
                        $("#logoContainer").css({"bottom":"50%"});
                    } else {
                        //full width dropdown
                        $("#collapsedLogoContainer").hide();
                        $("#drop").css({"position":"fixed", "width":"100%","height":"100px", "right":"0px", "top":"10px"});
                        $(".dropdown").css("width","100%");
                    }
                } else{
                    //450 < Width < 800 Collapsed
                    $("#drop").css({"position":"relative", "width":"","height":"", "right":"", "top":""});
                    $(".dropdown").css("width","30%");
                    $("#logoContainer").css({"bottom":"0"});
                }
                collapseHeaderDistance = 250;
                collapseHeaderFunction();
            }
        });

        //on loading, different viewport sizes
        if(startingWidth >= 1200){
            collapseHeaderDistance = 400;
            collapseHeaderFunction();
        } else if(startingWidth >= 800) {
            $("#sub-logo").show();
            $("#iconContainer").show();
            $("#navBar").show();
            $("#navBarCollapsed").show();
            $(".dropdown").hide();

            collapseHeaderDistance = 300;
            collapseHeaderFunction();
        } else {
            $("#sub-logo").hide();
            $("#iconContainer").hide();
            $("#navBar").hide();
            $("#navBarCollapsed").hide();
            $(".dropdown").show();

            if(startingWidth < 450){
                $("#logoContainer").css("width", "100%");
                $("#logo").css({"display":"block", "text-align":"center"});
                $(".projects").css("width","calc(100% - 32px)")
                $("#drop").css("margin-right","0px")
            } else {
                $("#logoContainer").css("bottom","32px");
            }

            collapseHeaderDistance = 250;
            collapseHeaderFunction();
        }
    })

    $('#backToTop').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });


    //Highlighting navigation
    if($(this).attr('title') == 'Caroline Win | Resume') {
        $("#resumeNav").addClass("highlight");
        $("#resumeNavC").addClass("highlight");
        $("#portfolioNav").removeClass("highlight");
        $("#aboutNav").removeClass("highlight");
        $("#contactNav").removeClass("highlight");
        $("#portfolioNavC").removeClass("highlight");
        $("#aboutNavC").removeClass("highlight");
        $("#contactNavC").removeClass("highlight");

    }
    else if($(this).attr('title') == 'Caroline Win | About') {
        $("#aboutNav").addClass("highlight");
        $("#aboutNavC").addClass("highlight");
        $("#portfolioNav").removeClass("highlight");
        $("#contactNav").removeClass("highlight");
        $("#resumeNav").removeClass("highlight");
        $("#portfolioNavC").removeClass("highlight");
        $("#contactNavC").removeClass("highlight");
        $("#resumeNavC").removeClass("highlight");
    }
    else if($(this).attr('title') == 'Caroline Win | Contact Me') {
        $("#contactNav").addClass("highlight");
        $("#contactNavC").addClass("highlight");
        $("#portfolioNav").removeClass("highlight");
        $("#aboutNav").removeClass("highlight");
        $("#resumeNav").removeClass("highlight");
        $("#portfolioNavC").removeClass("highlight");
        $("#aboutNavC").removeClass("highlight");
        $("#resumeNavC").removeClass("highlight");
    }
    else {
        $("#portfolioNav").addClass("highlight");
        $("#portfolioNavC").addClass("highlight");
        $("#aboutNav").removeClass("highlight");
        $("#contactNav").removeClass("highlight");
        $("#resumeNav").removeClass("highlight");
        $("#aboutNavC").removeClass("highlight");
        $("#contactNavC").removeClass("highlight");
        $("#resumeNavC").removeClass("highlight");
    }

})
