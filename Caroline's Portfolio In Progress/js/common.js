$(document).ready(function () {

    var fullHeader = '<div id = "headerContainerFull"><div id = "iconContainer"><a href = "#"><img class = "iconsHeader" src="images/twitter.svg"></a><a href = "#"><img class = "iconsHeader" src="images/linkedin.svg"></a><a href = "#"><img class = "iconsHeader" src="images/instagram.svg"></a></div><div id = "logoContainer"><a href = "index.html"><div><h1 id = "logo">Caroline Win</h1><h2 id = "sub-logo">UX &#38; INTERACTION DESIGNER</h2></div></a></div><nav><ul id = "navBar"> <!-- nav items need to be in backwards order due to have right set to 0px; --><li class = "primaryNav"><a class = "primaryNavItems" href = "contact.html"> CONTACT</a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "about.html"> ABOUT </a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "resume.html"> RESUME </a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "index.html"> PORTFOLIO </a></li></ul></nav></div>'

    var collapsedHeader = '<div id="collapsedBackground"><div id = "headerContainerCollapsed"><a href = "index.html"><div id = "collapsedLogoContainer"><h1 id = "logo">Caroline Win</h1></div></a><nav><ul id = "navBarCollapsed"><li class = "primaryNav"><a class = "primaryNavItems" href = "contact.html"> CONTACT</a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "about.html"> ABOUT </a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "resume.html"> RESUME </a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "index.html"> PORTFOLIO </a></li></ul></nav></div></div>'

    var footer = '<div id = "backToTopContainer"><div id = "backToTop"><a href = "#">&uarr; Back to Top</a></div></div><div id = "footerContainer"><div id = "footer"><p id = "copyright">© 2017 Caroline Win</p></div></div>'

    var dropdown = '<div class="dropdown"><button class="dropbtn">Menu</button><div class="dropdown-content"><a href="#">Portfolio</a><a href="#">Resume</a><a href="#">About</a><a href="#">Contanct</a></div></div>'

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
            console.log(windowwidth);
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
})
