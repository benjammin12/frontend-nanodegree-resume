/*
This is empty on purpose! Your code to build the resume will go here.
 */

 // $("#main").append(["Ben"]);


var today = "Today is Sunday";

var now = today.replace("Sunday", Date.now());


$("#main").append(now);

var formattedName = "Ben Xerri";
var formattedRole = "Developer";

var replaceName = HTMLheaderName.replace("%data%",formattedName);
var replaceRole = HTMLheaderRole.replace("%data%",formattedRole);

$("#main").prepend(replaceRole);
$("#main").prepend(replaceName);





