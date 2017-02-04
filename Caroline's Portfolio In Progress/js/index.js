$(document).ready(function () {

    var designList = ["comingsoon", "carma"]
    var designTitle = ["Capstone Project", "Carma"]
    var designDesc = ["7 month research and development project", "Mobile app for tween social coordination"]
    var designDate = ["Jan - Aug 2017", "Oct - Nov 2016"]

    var gameList = ["castleofdoors", "mindblock", "splashhour"]
    var gameTitle = ["Castle of Doors", "Mindblock", "Splash Hour"]
    var gameDesc = ["Training game for patients using prosthetic arms", "Educational game about emotional health", "Mobile game where you are the Jellyfish King!"]
    var gameDate = ["Jan - Aug 2013", "Jan - Aug", "Jan - Aug"]

    var artList = ["graphicdesign", "animation", "sketches"]
    var artTitle = ["Graphic Design", "2D and 3D Animation", "Sketches and Mixed Media"]
    var artDesc = ["Aviation Management System", "Tween social coordination", "Type II Diabetes"]

    var count = 0
    while (count < designList.length){
        var designProject = '<a href="'+designList[count]+'.html"><div class = "projects"><img src="images/'+designList[count]+'.png"><p class ="projectTitle">'+designTitle[count]+'</p><p>'+designDesc[count]+'</p><p class = "imageCaption">'+designDate[count]+'</p></div></a>'

        $("#designWork").append(designProject)
        count++
    }

    count = 0
    while (count < gameList.length){
        var gameProject = '<a href="'+gameList[count]+'.html"><div class = "projects"><img src="images/'+gameList[count]+'.png"><p class ="projectTitle">'+gameTitle[count]+'</p><p>'+gameDesc[count]+'</p><p class = "imageCaption">'+gameDate[count]+'</p></div></a>'

        $("#gameWork").append(gameProject)
        count++
    }

    count = 0
    while (count < artList.length){
        var artProject = '<a href="'+artList[count]+'.html"><div class = "projects"><img src="images/'+artList[count]+'.png"><p class ="projectTitle">'+artTitle[count]+'</p><p>'+artDesc[count]+'</p></div></a>'

        $("#artWork").append(artProject)
        count++
    }
})
