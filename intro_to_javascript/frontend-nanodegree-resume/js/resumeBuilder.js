/*
This is empty on purpose! Your code to build the resume will go here.
 */
 // $("#header").append("Hello World!");
 // $("#main").append("Lenny Meyerson");
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

$("#header").append(formattedName);
$("#header").append(formattedRole);

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
    {"title": "Accounting Tech II", "employer": "University of Colorado", "startDate": "2012", "endDate": "2015", "location": "Boulder, CO", "description": "Largely A/R tasks for a division of Student Affairs. Use of Oracle's Peoplesoft and Micros systems as well as MS office products day to day."},
    {"title": "Bookkeeper", "employer": "Boulder Vitamin Cottage Group", "startDate": "2005", "endDate": "2011", "location": "Boulder, CO", "description": "Primarly A/R for as many as 5 stores for an investment group sharing ownership in a sub-group of stores belonging to Natural Grocers by Vitamin Cottage."},
    {"title": "Temp", "employer": "Accountemps", "startDate": "2004", "endDate": "2005", "location": "Boulder, CO", "description": "A/R specialist working diverse assignments."},
  ]
};

var projects = {
  "projects": { "title": "see github account: https://github.com/TheObtuseAutodidact", "dates": "Turing since 10/15", "description": "Turing projects and others related to noob learning to code.", "images": "https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"}
}

var education = {
  "name": "Turing School of Software and Design",
  "location": "Denver, CO",
  "degree": "n/a",
  "major": "n/a",
  "focus": "Web Development (emphasis: Ruby and Ruby on Rails)",
  "dates": "10/15 - present",
  "onlineCourses": ["codecademy", "udacity", "coursera", "launch school (formerly tealeaf)"]
};

if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart)

  var formatSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formatSkill)
  formatSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formatSkill)
  formatSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formatSkill)
  formatSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formatSkill)
  formatSkill = HTMLskills.replace("%data%", bio.skills[4]);
  $("#skills").append(formatSkill)
}
function displayWork() {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]['employer']);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job]['title']);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);

      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location)
      $(".work-entry:last").append(formattedLocation);

      var formattedEmploymentDuration = work.jobs[job].startDate + " - " + work.jobs[job].endDate;
      var formattedWorkDates = HTMLworkDates.replace("%data%", formattedEmploymentDuration)
      $(".work-entry:last").append(formattedWorkDates);

      var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
      $(".work-entry:last").append(formattedWorkDescription);
  }
};

displayWork();

$("#main").append(internationalizeButton);

function inName(name) {
  var internationalizedName = name.trim().split(" ");
  internationalizedName[0][0] = internationalizedName[0][0].toUpperCase() +
    internationalizedName[0].slice(1).toLowerCase();
  internationalizedName[1] = internationalizedName[1].toUpperCase();
  internationalizedName = internationalizedName[0] + " " + internationalizedName[1];
  return internationalizedName
};
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
