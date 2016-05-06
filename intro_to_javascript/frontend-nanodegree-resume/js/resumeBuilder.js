/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#header").append("Hello World!");
//  $("#main").append("Lenny Meyerson");
//  var awesomeThoughts = "I am theobtuseautodidact and I am AWESOME!"
//  console.log(awesomeThoughts);
//
// var email = "camron@udacity.com";
// var newEmail = email.replace("udacity", "gmail");
// console.log(email);
// console.log(newEmail);
// var funThoughts = "FUN"
// $("#main").append(awesomeThoughts.replace("AWESOME", funThoughts));
var formattedName = HTMLheaderName.replace("%data%", "Lenny Meyerson");
var role = "Developer"
var formattedRole = HTMLheaderRole.replace("%data%", role)
var bio = {
  "name" : "Lenny Meyerson",
  "role" : "Junior Developer",
  "contactInfo" : {"email": "theobtuseautodidact@gmail.com", "phone": "303-241-4100", "github": "https://github.com/TheObtuseAutodidact" },
  "picture" : "https://avatars2.githubusercontent.com/u/10384487?v=3&s=460",
  "welcomeMessage" : "Hello!",
  "skills" : ["ruby", "rails", "basic html and css", "git", "and I make a mean basil pesto"]
};

var work = {
  "jobs": [
    {"title": "Accounting Tech II", "employer": "University of Colorado", "startDate": "2012", "endDate": "2015", "location": "Boulder, CO"},
    {"title": "Bookkeeper", "employer": "Boulder Vitamin Cottage Group", "startDate": "2005", "endDate": "2011", "location": "Boulder, CO"},
    {"title": "Temp", "employer": "Accountemps", "startDate": "2004", "endDate": "2005", "location": "Boulder, CO"},
  ]
};

var projects = {
  "projects": { "title": "see github account: https://github.com/TheObtuseAutodidact", "dates": "Turing since 10/15", "description": "Turing projects and others related to noob learning to code.", "images": "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"}
}
// work.position = "Accounting Tech II"
// work.employer = "University of Colorado"
// work.since = "start date: 2012"
// work.until = "end date: 2015"
// work.city = "Boulder"

var education = {
  "name": "Turing School of Software and Design",
  "location": "Denver, CO",
  "degree": "n/a",
  "major": "n/a",
  "focus": "Web Development (emphasis: Ruby and Ruby on Rails)",
  "dates": "10/15 - present",
  "onlineCourses": ["codecademy", "udacity", "coursera", "launch school (formerly tealeaf)"]
};
// education.name = "Turing School of Software and Design"
// education.since = "start date: 10/2015"
// education.city = "Denver"

// $("#header").append(formattedName);
// $("#header").append(formattedRole)

// $("#main").append(bio.welcomeMessage)
// $("#main").append("<img src=" + bio.picture + "alt='me'>")
// $("#main").append("Contact info: " + bio.contactInfo)
// $("#main").append("Skills: " + bio.skills)
//
// $("#main").append("Most recent employment: " + work["position"])
// $("#main").append(education.name)
// var skills =
//   ["awesomeness", "programming", "teaching", "JS"];
//
// $("#main").append(skills.length);
// $("#main").append(skills[0]);

// var charEscape = function(_html) {
//     var newHTML = _html;
//
//     newHTML = _html.replace(/</g, "&lt;");
//     newHTML = newHTML.replace(/>/g, "&gt;");
//
//     return newHTML;
// };
