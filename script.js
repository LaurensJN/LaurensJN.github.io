function multiplyNode(node, count, deep) {
    for (var i = 0, copy; i < count - 1; i++) {
        copy = node.cloneNode(deep);
        node.parentNode.insertBefore(copy, node);
    }
}


//TODO get list in separate file?
var descriptions = {
	"QGIS" : "I used QGIS extensively during my work, studies and various internships.",
	"Revit" : "My current work involves the use of Revit for research in heritage BIM.",
	"Blender" : "I started using Blender as a hobby project. Nowadays I use Blender and the BlenderBIM add-on for my work with BIM.",
	"CloudCompare" : "As in my work and studies I often have and had to deal with point clouds, CloudCompare is no unfamiliar program to me. ",
	"Rhino" : "Rhino+Grasshoper is an ideal combination for complex spatial analysis and visualisation. Therefore I used it not only during my \
	BSc. Architecture, but also extensively during my MSc. Geomatics for the Built Environment.",
  "FME": "I used FME for automatic LOD2 city models creation using a point cloud",
	"Python" : "I am an experienced python programmer. It's my preferred language for data processing and manipulation. \
  See for example <a href='https://github.com/ZAGsi/video2geoimg'>ZAGsi/video2geoimg</a> or \
  <a href='https://github.com/ZAGsi/BlenderSLAM'>ZAGsi/BlenderSLAM</a>. I am well acustomed to opencv, pandas, scipy and many other libraries.",
	"Csharp" : "I used C# together with Unity for my thesis of Geomatics for the Built Environment. In my thesis I used the Microsoft Hololens \
	for indoor positioning, in the case of an emergency.",
	"Julia" : "",
	"SQL": "I have experience in working with PostGIS / PostgreSQL and SpatiaLite / SQLite.",
	"Javascript" : "I have used Javascript in my studies for efficient web visualisation of point clouds with THREE.js.",
	"CSSHTML" : "My experience with CSS/HTML is fairly limited. However, I did include it as I have some experience, such as \
	this website.",
	"Geodata" : "With Geomatics as background, my strengths - and interests - lie within the field of geodata.",
	"PointClouds" : "We are developing a low-cost method for point cloud catpuring with stereovision. \
                  Next to that, I used point clouds in the scan-to-BIM process.",
	"IFC" : "Current developer of IfcOpenShell, an open source library to modify and view IFC models. See <a href='https://www.github.com/IfcOpenShell/IfcOpenShell'>IfcOpenShell</a>",
	"CityModels": "3D city models such as CityJSON and CityGML. I am also the author of the ifccityjson converter in the IfcOpenShell \
	library that allows for conversion from CityJSON - IFC. See <a href='https://www.github.com/IfcOpenShell/IfcOpenShell'>IfcOpenShell</a>",
	"VersionControl" : "I use github for all open source projects I am currently working on.",
	"zaggis": "- GIS data analysis and processing for vulnerability maps. <br> \
               - Maintaining WMS / WFS QGIS server. <br> \
               - Creator of the <a href='https://github.com/ZAGsi/video2geoimg'>ZAGsi/video2geoimg</a> repository.",
	"zagbim": "- IFC manipulation using IfcOpenShell and BlenderBIM. <br>\
               - Digital twins with real-time sensor data. <br>\
               - Heritage BIM for conservation.",
	"zagstereo": "- Using the Raspberri Pi camera module. <br> \
                   - OpenCV for image understanding. <br> \
                   - Low-cost SLAM system in blender. See our github repository <a href='https://github.com/ZAGsi/BlenderSLAM'>ZAGsi/BlenderSLAM</a>.",
	"Dutch": "Dutch is my native language.",
	"English": "I finished multiple academic degrees in English and I use it for my daily work.",
	"German": "I finished multiple courses given in the German language when I studied at the TU Munich. I recently gave a presentation at a German geospatial conference.",
	"Slovene": "I finished a B1 Slovene course at the faculty of Ljubljana. I have worked in Slovenia for almost 2 years.",
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
