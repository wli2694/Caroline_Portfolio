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
    "artlink" : "images/sketches/art_tiger.jpg",
    "thumbnail" : "images/sketches/art_tiger_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_elk.jpg",
    "thumbnail" : "images/sketches/art_elk_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_wolf.jpg",
    "thumbnail" : "images/sketches/art_wolf_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_heart.jpg",
    "thumbnail" : "images/sketches/art_heart_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_umbrella.jpg",
    "thumbnail" : "images/sketches/art_umbrella_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_coins.jpg",
    "thumbnail" : "images/sketches/art_coins_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_arrows.jpg",
    "thumbnail" : "images/sketches/art_arrows_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_photos.jpg",
    "thumbnail" : "images/sketches/art_photos_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_storm.jpg",
    "thumbnail" : "images/sketches/art_storm_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_egg.jpg",
    "thumbnail" : "images/sketches/art_egg_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_egg2.jpg",
    "thumbnail" : "images/sketches/art_egg2_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_redvines.jpg",
    "thumbnail" : "images/sketches/art_redvines_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_strawbird.jpg",
    "thumbnail" : "images/sketches/art_strawbird_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_fruit.jpg",
    "thumbnail" : "images/sketches/art_fruit_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_pumpkin1.jpg",
    "thumbnail" : "images/sketches/art_pumpkin1_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_pumpkin2.jpg",
    "thumbnail" : "images/sketches/art_pumpkin2_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_pumpkin3.jpg",
    "thumbnail" : "images/sketches/art_pumpkin3_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_pumpkin4.jpg",
    "thumbnail" : "images/sketches/art_pumpkin4_thumbnail.jpg"
  }, {
    "artlink" : "images/sketches/art_desk.jpg",
    "thumbnail" : "images/sketches/art_desk_thumbnail.jpg"
  }]
};

artportfolio.display = function() {
  artportfolio.projects.forEach(function(project) {
    var formattedart = artitem.replace(artlink, project.artlink).replace(thumbnail, project.thumbnail);
    $('#artcontainer').append(formattedart);
  });
};

artportfolio.display();

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
    $('.animcontainer').append(formattedvideo);
  });
};

animations.display();

});
