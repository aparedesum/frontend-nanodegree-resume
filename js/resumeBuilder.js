var bio = {
	name : "Alfonso Paredes",
	role: "Software Engineer",
	contacts: {
		mobile: "943220162", 
		email: "a.paredes.um@gmail.com", 
		github: "https://github.com/aparedesum",
		location: "Lima, Los Olivos" 
	},
	bioPic : "images/minion.jpg ",
	welcomeMessage : "Welcome, check out my online resume :)",
	skills: ["java", "python", "javascript"],
	display: function() {
		var formattedName = HTMLheaderName.replace("%data%",this.name);
		var formattedRole = HTMLheaderRole.replace("%data%",this.role);
		var formattedImage = HTMLbioPic.replace("%data%",this.bioPic);
		var formattedMessage = HTMLwelcomeMsg.replace("%data%",this.welcomeMessage);
		var formattedMobile = HTMLmobile.replace("%data%",this.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%",this.contacts.email);
		var formattedGitHub = HTMLgithub.replace("%data%",this.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%",this.contacts.location);

		$("#header").prepend(formattedRole).prepend(formattedName);
		$("#topContacts").append(formattedMobile,formattedEmail,formattedGitHub, formattedLocation);

		$("#header").append(formattedImage,formattedMessage);
		$("#header").append(HTMLskillsStart);

		for(skill in this.skills) {
			var formattedSkills = HTMLskills.replace("%data%",this.skills[skill]);
			$("#skills").append(formattedSkills);
		};

	
		
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedGitHub, formattedLocation);
		
	}
};


var education = {
	schools: [
		{	name: "National University of San Marcos",
			location: "Lima, Cercado",
			degree: "bachelor",
			majors: ["Computer Science"],
			dates: 2010,
			url:" http://www.unmsm.edu.pe"
		}
	],
	onlineCourses : [{
		title : "Front-End Web Developer Nanodegree",
		school : "Udacity",
		dates : "2015",
		url : "https://www.udacity.com"
	}],

	display : function(){
		for(school in education.schools) {
			$("#education").append(HTMLschoolStart);
			
			var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
			$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);		
		}

		if(this.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(course in this.onlineCourses){
				var div = $("<div class=\"education-entry\"></div>");
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",this.onlineCourses[course].title);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",this.onlineCourses[course].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%",this.onlineCourses[course].dates);
				var formattedOnlineUrl =  HTMLonlineURL.replace("%data%",this.onlineCourses[course].url);


				div.append(formattedOnlineTitle + formattedOnlineSchool, formattedOnlineDates,formattedOnlineUrl);
				$("#education").append(div);
			}
		}

		
	}

};

var work = {	
	jobs : [
		{	employer : "Verizon",
			title : "Software Engineer",
			location : "Lima, Miraflores",
			dates : "Nov 2013-Present",
			description : "Some fun with the customers"
		},
		{	employer : "AEP Energy",
			title : "Software Engineer",
			location : "Lima, Magdalena",
			dates : "Jul 2013-Oct 2013",
			description : "Work as a software engineer"
		},
		{	employer : "Avantica",
			title : "Software Engineer",
			location : "Lima, San Isidro",
			dates : "Dec 2011-Jun 2013",
			description : "Work as a software engineer"
		}
	],
	display: function (){
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;

			$(".work-entry:last").append(formattedEmployerTitle);

			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			
			$(".work-entry:last").append(formattedDates);	

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);	
		}
	}
};

var projects = {
	projects : [
		{
			title: "Javascript: Resume Project",
			dates: "2015",
			description: "Simple project for my resume",
			images: ["images/eyes.jpg"]
		}
	],
	display: function() {
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDates);		

			var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);		

			if(projects.projects[project].images.length > 0) {
				for(image in projects.projects[project].images){
					var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);		
				}
			}
		}
	}
};



bio.display();
work.display();
projects.display();
education.display();

$(document).click(function(loc) { 
	var x = loc.pageX;
	var y = loc.pageY;
	logClicks(x,y);
});

function inName(name){
	name = name.trim().split(" ");
	name[1]=name[1].toUpperCase();
	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	return name[0] + " " + name[1];

}

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);