/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append(["Ben"]);

/*
var today = "Today is Sunday";

var now = today.replace("Sunday", Date.now());


$("#main").append(now);

 */

var formattedName = "Ben Xerri";
var formattedRole = "Developer";

var replaceName = HTMLheaderName.replace("%data%",formattedName);
var replaceRole = HTMLheaderRole.replace("%data%",formattedRole);

$("#main").prepend(replaceRole);
$("#main").prepend(replaceName);


var uploadPic = HTMLbioPic.replace("%data%", "images/fry.jpg");
$("#header").append(uploadPic);




var bio = { //object
    "name": "Ben",
    "age": 26,
    "Occupation": "Therapist",
    "contactInfo": {
        "mobile": "555-332-3145",
        "email": "ben101@gmail.com",
        "facebook": "facebook.com",
        "github" : "github.com/benjammin12"
    },
    "welcomeMessage": "Welcome to resume",
    "skills" : ["Java", "javaScript", "html", "css"],
    "bioPic": "images/fry.jpg"

};

//$("#main").append(bio.welcomeMessage);
// shows welcome message in bio, acess all with dot notation 

var education = {  //json
    "schools": [{
        "name": "Farmingdale State College",
        "city": "Farmingdale, NY",
        "degree": "Associates",
        "major": ["Liberal Arts"]
    }, {
        "name": "Stony Brook State University",
        "city": "Stony Brook, NY",
        "degree": "BA",
        "major": ["Psychology"]
    }
    ],

    "onlineCources": [
        {
            "title": "html/css",
            "organization": "udacity"
        },
        {
            "title": "Go Programming",
            "organization" : "youtube.com"
        }
    ]

}

var work = {
    "jobs": [
        {
            "Company": "Queens Nassau Nursing Home",
            "City": "Far Rockaway, New York",
            "Role": "Cognitive Therapist",
            "EmploymentTime": "4/14-Present"
        },

        {
            "Company": "Retro Fitness",
            "City": "Bayshore, NY",
            "Role": "Personal Trainer",
            "EmploymentTime": "9/14-9/15"
        }]
}




for (var i = 0; i < bio.skills.length; i++) {

    if (bio.skills.length > 0) {

        var formatSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formatSkill);

    }


}

for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].Company);

    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].Role);

    var position = formattedEmployer + formattedTitle;

    $(".work-entry:last").append(position);
}

