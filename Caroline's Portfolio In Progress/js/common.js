$(document).ready(function () {

    var fullHeader = '<div id = "headerContainerFull"><div id = "iconContainer"><a href = "#"><img class = "iconsHeader" src="images/twitter.svg"></a><a href = "#"><img class = "iconsHeader" src="images/linkedin.svg"></a><a href = "#"><img class = "iconsHeader" src="images/instagram.svg"></a></div><div id = "logoContainer"><a href = "index.html"><div><p id = "logo">Caroline Win</p><p id = "sub-logo">UX &#38 INTERACTION DESIGNER</p></div></a></div><nav><ul id = "navBar"> <!-- nav items need to be in backwards order due to have right set to 0px; --><li class = "primaryNav"><a class = "primaryNavItems" href = "contact.html"> CONTACT</a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "about.html"> ABOUT </a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "resume.html"> RESUME </a></li><li class = "primaryNav"><a class = "primaryNavItems" href = "index.html"> PORTFOLIO </a></li></ul></nav></div>'

    var collapsedHeader = '<div id="headerwords"><div id="logo"><a href="index.html"></a></div><ul id="navtop"></ul></div><div id = "headerContainerCollapsed"><h1 id = "logo"><a href = "index.html"> Caroline Win</a></h1><nav><ul id = "navBar"><li class = "primaryNav"><a href = "contact.html"> CONTACT</a></li><li class = "primaryNav"><a href = "about.html"> ABOUT </a></li><li class = "primaryNav"><a href = "resume.html"> RESUME </a></li><li class = "primaryNav"><a href = "index.html"> PORTFOLIO </a></li></ul></nav></div>'

    var footer = '<div id = "backToTopContainer"><div id = "backToTop"><a href = "#">&uarr; Back to Top</a></div></div><div id = "footerContainer"><div id = "footer"><p id = "copyright">© 2017 Caroline Win</p></div></div>'

    $("header").append(fullHeader)
    $("footer").append(footer)
})
