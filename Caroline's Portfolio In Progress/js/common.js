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
    $("nav").append(dropdown)
    $("footer").append(footer)

    var startingWidth = $(window).width();

    $(function() {
        $("#collapsedBackground").hide();
        $(".dropdown").hide();
        if(startingWidth <= 800){
            $("#navBar").hide();
            $(".dropdown").show();
        }
        var collapseHeaderDistance = 400;
        var collapseHeaderFunction = $(window).scroll(function(){
            var scroll = window.pageYOffset || document.documentElement.scrollTop;
            if( scroll >= collapseHeaderDistance){
                $("#collapsedBackground").show();
                $("#headerContainerFull").hide();
            } else {
                $("#collapsedBackground").hide();
                $("#headerContainerFull").show();
            }
        })


        $(window).bind('resize', function() {
            var windowwidth = $(window).width();
            if(windowwidth >= 1200){
                $("#sub-logo").show();
                $("#iconContainer").show();
                $("#navBar").show();
                $("#navBarCollapsed").show();
                $(".dropdown").hide();

                collapseHeaderDistance = 400;
                collapseHeaderFunction();
            } else if(windowwidth >= 800) {
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

                collapseHeaderDistance = 250;
                collapseHeaderFunction();
            }
        });

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

            collapseHeaderDistance = 250;
            collapseHeaderFunction();
        }
    })

    $('#backToTop').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;
    });

    
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
