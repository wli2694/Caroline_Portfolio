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

// GAME DESIGN

// Animation
var animvideo = '<iframe width="520" height="390"src="%animsrc%" frameborder="0" allowfullscreen></iframe>';
var animations = {
  "projects" : [{
    "link" : 'https://www.youtube.com/embed/qVZkO-CiRb8'
  }, {
    "link" : "https://www.youtube.com/embed/PMlfSTe0Nlk"
  }, {
    "link" : "https://www.youtube.com/embed/f_uA7rJV0pQ"
  }]
};

/*
var formattedVideo = animvideo.replace('%animsrc%', animations.projects[0].link);
$('.animcontainer').append(formattedVideo);
*/
animations.display = function() {
  animations.projects.forEach(function(project) {
    var formattedvideo = animvideo.replace('%animsrc%', project.link);
    $('#animcontainer').append(formattedvideo);
  });
};

animations.display();

});
