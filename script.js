function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}


//TODO get list in separate file?
var descriptions = {
	"QGIS" : "I used QGIS extensively during my studies and various internships. ",
	"Revit" : "My current work involves the use of Revit for research",
	"Blender" : "I started using Blender as a hobby project. Nowadays I use Blender and the BlenderBIM add-on for my work in BIM.",
	"CloudCompare" : "As in my work and studies I often have and had to deal with point clouds, CloudCompare is no unfamiliar program to me. ",
	"Rhino" : "Rhino+Grasshoper is an ideal combination for complex spatial analysis and visualisation. Therefore I used it not only during my \
	BSc. Architecture, but also extensively during my MSc. Geomatics for the Built Environment.",
	"Python" : "My daily work involves a lot of python programming. The project Sensor Vision (see section current occuptation) is mostly done with python.",
	"Csharp" : "I used C# together with Unity for my thesis of Geomatics for the Built Environment. In my thesis I used the Microsoft Hololens \
	for indoor positioning, in the case of an emergency.",
	"Julia" : "",
	"SQL": "Databases are a must when working with geodata. I have experience in working with PostGIS / PostgreSQL and SpatiaLite / SQLite.",
	"Javascript" : "I have used Javascript in my studies for efficient web visualisation of point clouds with THREE.js.",
	"CSSHTML" : "My experience with CSS/HTML is fairly limited. However, I did include it as I have some experience, such as \
	this website.",
	"Geodata" : "",
	"PointClouds" : "",
	"IFC" : "Current developer of IfcOpenShell, an open source library to modify and view IFC models. See <a href='https://www.github.com/IfcOpenShell/IfcOpenShell'>IfcOpenShell</a>",
	"CityModels": "3D city models such as CityJSON and CityGML. I am also the author of the ifccityjson converter in the IfcOpenShell \
	library that allows for conversion from CityJSON - IFC. See <a href='https://www.github.com/IfcOpenShell/IfcOpenShell'>IfcOpenShell</a>",
	"VersionControl" : "",
	"overflow": "We are doing a vulnerability assessment of embankments and bridges exposed to flooding hazards. The overall objective of the oVERFLOw project \
	is strengthening resilience to climate change impacts with the specific objective being the development of climate-resilient infrastructure. \
	I'm working on the spatial / GIS part of the analysis in this project.",
	"bimboost": "We created a Historic BIM model of a Slovenian heritage building in Bled. There, we measured environmental parameters \
	and imported these and created a digital twin, to explore how this can be used for healthier environments in heritage buildings. Also, as contribution\
	to interoperability of BIM models, the IFC format has been used for model exchange. As the existing IFC exchange schemas are not sufficient for heritage\
	data exchange, we are in the process of developing a Model View Definition (MVD) that can be used as exchange schema for a conservation / restoration plan.",
	"sensorvision": "We are making a low-cost SLAM system using Raspberry Pi cameras and an IMU. We will measure the accuracy of point clouds produced by the RPi's and the \
	Stereo-PTAM algorithm, a SLAM algorithm for stereocameras. We will validate our results using LIDAR & make some suggestions when and how to use such a setup, \
	based on our results. Follow the current progress via our github repository <a href='https://github.com/ZAGsi/blender_stereo_ptam'>ZAGsi/blender_stereo_ptam</a>.",
	"Dutch": "Dutch is my native language.",
	"English": "I did multiple academic degrees in English and my daily work is entirely in English.",
	"German": "My highest level of German education is B1.1. Next to that I did multiple courses at the TU Munich in German.",
	"Slovene": "My highest level of Slovene education is the intermediate course Slovene at the faculty of Ljubljana.",
}

function changeDefOver(e) {
  if (e.target.id in descriptions) {
	if (e.target.className == "project") {
		document.getElementById("projectdescription").innerHTML = descriptions[e.target.id];
		var projects = document.getElementsByClassName('project');
		for (var i = 0; i < projects.length; i++) {
		  projects[i].style.textDecoration = 'underline black 1px';
		}
		e.target.style.textDecoration = 'underline orange 1px'
	}
	else document.getElementById("descriptions").innerHTML = descriptions[e.target.id];
  }
  //e.target.classList.toggle('opacity-toggle');
}

function changeDefOverProj(e) {
  if (e.target.id in descriptions) {
  	document.getElementById("projectdescription").innerHTML = descriptions[e.target.id];
  }
  //e.target.classList.toggle('opacity-toggle');
}
