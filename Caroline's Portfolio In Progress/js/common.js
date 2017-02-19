$(document).ready(function () {

    var fullHeader = '<div id = "headerContainerFull"><div id = "iconContainer"><a href = "#"><img class = "iconsHeader" src="images/twitter.svg"></a><a href = "#"><img class = "iconsHeader" src="images/linkedin.svg"></a><a href = "#"><img class = "iconsHeader" src="images/instagram.svg"></a></div><div id = "logoContainer"><a href = "index.html"><div><p id = "logo">Caroline Win</p><p id = "sub-logo">UX &#38; INTERACTION DESIGNER</p></div></a></div><nav><ul id = "navBar"> <!-- nav items need to be in backwards order due to have right set to 0px; --><li class = "primaryNav"><a class = "primaryNavItems" href = "contact.html"> CONTACT</a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "about.html"> ABOUT </a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "resume.html"> RESUME </a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "index.html"> PORTFOLIO </a></li></ul></nav></div>'

    var collapsedHeader = '<div id="headerwords"><div id="logo"><a href="index.html"></a></div><ul id="navtop"></ul></div><div id = "headerContainerCollapsed"><a href = "index.html"><div id = "collapsedLogoContainer"><h1 id = "logo"><p id = "logo">Caroline Win</p></h1></div></a><nav><ul id = "navBarCollapsed"><li class = "primaryNav"><a class = "primaryNavItems" href = "contact.html"> CONTACT</a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "about.html"> ABOUT </a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "resume.html"> RESUME </a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "index.html"> PORTFOLIO </a></li></ul></nav>'

    var footer = '<div id = "backToTopContainer"><div id = "backToTop"><a href = "#">&uarr; Back to Top</a></div></div><div id = "footerContainer"><div id = "footer"><p id = "copyright">© 2017 Caroline Win</p></div></div>'

    var dropdown = '<div class="dropdown"><button class="dropbtn">Menu</button><div class="dropdown-content"><a href="#">Portfolio</a><a href="#">Resume</a><a href="#">About</a><a href="#">Contanct</a></div></div>'

    $("header").append(fullHeader)
    $("header").append(collapsedHeader)
    $("nav").append(dropdown)
    $("footer").append(footer)

    $(function() {
        $("#headerContainerCollapsed").hide();
        $(".dropdown").hide();
        var collapseHeaderDistance = 400;
        $(window).scroll(function(){
            var scroll = window.pageYOffset || document.documentElement.scrollTop;
            if( scroll >= collapseHeaderDistance){
                $("#headerContainerCollapsed").show();
                $("#headerContainerFull").hide();
            } else {
                $("#headerContainerCollapsed").hide();
                $("#headerContainerFull").show();
            }
        })

        $(window).resize(function() {
            var windowwidth = $(window).width();
            if(windowwidth >= 800){
                $("#sub-logo").show();
                $("#iconContainer").show();
                $("#navBar").show();
                $(".dropdown").hide();
            } else {
                $("#sub-logo").hide();
                $("#iconContainer").hide();
                $("#navBar").hide();
                $(".dropdown").show();
            }
        })
    })
})
