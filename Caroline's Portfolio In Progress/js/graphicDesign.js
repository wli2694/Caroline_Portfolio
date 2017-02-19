$(document).ready(function () {

    // ART PORTFOLIO
    var artsubt = '<div class="subtitle">Art Portfolio</div>';
    var artbox = '<div class="artbox"><div class="artcontainer"></div></div>';
    var artitem ='<a href="%artlink%"><img class="artimg" src="%thumbnail%"/></a>';
    var main = $('#main');
    var artlink = '%artlink%';
    var thumbnail = '%thumbnail%';
    var gamesubt = '<div class="subtitle">Game Design</div>';
    var animsubt = '<div class="subtitle">Animation</div>';
    var animbox = '<div class="animbox"><div class="animcontainer"></div></div>';

    // Copy & Pasted from YouTube

    main.append(artsubt);
    main.append(artbox);

    main.append(gamesubt);
    main.append(artbox);

    main.append(animsubt);
    main.append(animbox);

    var artportfolio = {
        "projects" : [{
            "artlink" : "images/graphicdesign/art_tiger2.jpg",
            "thumbnail" : "images/graphicdesign/art_tiger2_thumbnail.jpg"
        }]
    };

    artportfolio.display = function() {
        artportfolio.projects.forEach(function(project) {
            var formattedart = artitem.replace(artlink, project.artlink).replace(thumbnail, project.thumbnail);
            $('#gdcontainer').append(formattedart);
        });
    };

    artportfolio.display();

});
