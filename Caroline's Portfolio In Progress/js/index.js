$(document).ready(function () {
    //Design section
    var design = $("#designWork");
    var designProjectCode = '<a href="%designLink%.html"><div class = "projects"><img src="images/%designImage%.png"><p class ="projectTitle">%designTitle%</p><p class = "descText">%designDesc%</p><p class = "imageCaption">%designDate%</p></div></a>';

    var designLink = "%designLink%";
    var designImage = "%designImage%";
    var designTitle = "%designTitle%";
    var designDesc = "%designDesc%";
    var designDates = "%designDate%";

    var designProjects = {
        "projects" : [{
            "link" : "eaton",
            "image" : "eaton",
            "title" : "Eaton Dashboard",
            "description" : "7 month research and development project",
            "dates" : "Jan - Aug 2017"
        }, {
            "link" : "carma",
            "image" : "carma",
            "title" : "Carma",
            "description" : "Mobile app for tween social coordination",
            "dates" : "Oct - Nov 2016"
        }, {
            "link" : "avmosys",
            "image" : "avmosys",
            "title" : "AVMOSYS",
            "description" : "Mobile app for business aviation management",
            "dates" : "Nov 2015 - Nov 2016"
        }, {
            "link" : "capsule",
            "image" : "capsule",
            "title" : "Capsule",
            "description" : "Digital platform for undergraduate student reflection",
            "dates" : "Sept - Dec 2016"
        }, {
            "link" : "uresearch",
            "image" : "uresearch",
            "title" : "uResearch",
            "description" : "Search and collaboration tools for academics",
            "dates" : "Sept - Nov 2016"
        }, {
            "link" : "type2diabetes",
            "image" : "type2diabetes",
            "title" : "Type 2 Diabetes Education",
            "description" : "Co-participatory design to improve lives of Type 2 diabetes patients",
            "dates" : "Jan- May 2016"
        }, {
            "link" : "whatisux",
            "image" : "whatisux",
            "title" : "What is UX Design?",
            "description" : "Website that explains UX design to non-designers",
            "dates" : "Oct - Dec 2016"
        }, {
            "link" : "smartfit",
            "image" : "smartfit",
            "title" : "SmartFit",
            "description" : "Mixed reality app that serves as a virtual trainer for gym members",
            "dates" : "Nov - Dec 2016"
        }, {
            "link" : "scottychat",
            "image" : "scottychat",
            "title" : "ScottyChat",
            "description" : "Mobile website that pairs CMU students with alumni mentors",
            "dates" : "Sept - Oct 2016"
        }, {
            "link" : "dolcie",
            "image" : "dolcie",
            "title" : "DOLCIE",
            "description" : "Type 1 Diabetes management app created in OH/IO Hackathon",
            "dates" : "November 2015"
        }, {
            "link" : "virtualhealthcoach",
            "image" : "virtualhealthcoach",
            "title" : "Virtual Health Coach",
            "description" : "Web app that guides patients in creating and reaching health goals",
            "dates" : "May 2014 - Nov 2015"
        }, {
            "link" : "vitals",
            "image" : "vitals",
            "title" : "VITALS Dedesign",
            "description" : "OSU medical student portal for tracking schedule and tasks",
            "dates" : "October 2015"
        }, {
            "link" : "telemedicine",
            "image" : "telemedicine",
            "title" : "Telemedicine Website",
            "description" : "Informational website for physician's virtual clinic",
            "dates" : "Sept - Nov 2015"
        }, {
            "link" : "timebank",
            "image" : "timebank",
            "title" : "Timebank App",
            "description" : "Mobile app that allows people to share skills & expertise",
            "dates" : "June - Sept 2015"
        }, {
            "link" : "ridesouthla",
            "image" : "ridesouthla",
            "title" : "Ride South LA",
            "description" : "Mobile event promotion strategy for non-profit in Los Angeles",
            "dates" : "May - June 2012"
        }]
    };

    designProjects.display = function() {
        designProjects.projects.forEach(function(items) {
            var newDesignProject = designProjectCode.replace(designLink, items.link).replace(designImage, items.image).replace(designTitle, items.title).replace(designDesc, items.description).replace(designDates, items.dates);
            design.append(newDesignProject);
        })
    }
    designProjects.display();

    //Game section
    var game = $("#gameWork");
    var gameProjectCode = '<a href="%gameLink%.html"><div class = "projects"><img src="images/%gameImage%.png"><p class ="projectTitle">%gameTitle%</p><p class = "descText">%gameDesc%</p><p class = "imageCaption">%gameDate%</p></div></a>';

    var gameLink = "%gameLink%";
    var gameImage = "%gameImage%";
    var gameTitle = "%gameTitle%";
    var gameDesc = "%gameDesc%";
    var gameDates = "%gameDate%";

    var gameProjects = {
        "projects" : [{
            "link" : "castleofdoors",
            "image" : "castleofdoors",
            "title" : "Castle of Doors",
            "description" : "Training game for patients using prosthetic arms",
            "dates" : "Jan - Aug 2013"
        }, {
            "link" : "mindblock",
            "image" : "mindblock",
            "title" : "Mindblock",
            "description" : "Educational game about emotional health",
            "dates" : "Jan - Aug 2013"
        }, {
            "link" : "splashhour",
            "image" : "splashhour",
            "title" : "Splash Hour",
            "description" : "Mobile game where you are the Jellyfish King!",
            "dates" : "Jan - Aug 2013"
        }]
    };

    gameProjects.display = function() {
        gameProjects.projects.forEach(function(items) {
            var newGameProject = gameProjectCode.replace(gameLink, items.link).replace(gameImage, items.image).replace(gameTitle, items.title).replace(gameDesc, items.description).replace(gameDates, items.dates);
            game.append(newGameProject);
        })
    }
    gameProjects.display();

    //Art section
    var art = $("#artWork");
    var artProjectCode = '<a href="%artLink%.html"><div class = "projects"><img src="images/%artImage%.png"><p class ="projectTitle">%artTitle%</p><p class = "descText">%artDesc%</p></div></a>';

    var artLink = "%artLink%";
    var artImage = "%artImage%";
    var artTitle = "%artTitle%";
    var artDesc = "%artDesc%";
    var artDates = "%artDate%";

    var artProjects = {
        "projects" : [{
            "link" : "graphicdesign",
            "image" : "graphicdesign",
            "title" : "Graphic Design",
            "description" : "TODO",
        }, {
            "link" : "animation",
            "image" : "animation",
            "title" : "2D and 3D Animation",
            "description" : "TODO",
        }, {
            "link" : "sketches",
            "image" : "sketches",
            "title" : "Sketches and Mixed Media",
            "description" : "TODO",
        }]
    };

    artProjects.display = function() {
        artProjects.projects.forEach(function(items) {
            var newArtProject = artProjectCode.replace(artLink, items.link).replace(artImage, items.image).replace(artTitle, items.title).replace(artDesc, items.description).replace(artDates, items.dates);
            art.append(newArtProject);
        })
    }
    artProjects.display();
})

