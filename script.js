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
	"Python" : "",
	"Csharp" : "I used C# together with Unity for my thesis of Geomatics for the Built Environment. In my thesis I used the Microsoft Hololens \
	for indoor positioning, in the case of an emergency.",
	"Julia" : "",
	"SQL": "Databases are a must when working with geodata. I have experience in working with PostGIS / PostgreSQL and SpatiaLite / SQLite.",
	"Javascript" : "I have used Javascript in my studies for efficient web visualisation of point clouds with THREE.js.",
	"CSSHTML" : "My experience with CSS/HTML is fairly limited. However, I did include it as I have some experience, such as \
	this website.",
	"Geodata" : "",
	"PointClouds" : "",
	"IFC" : "IFC is a colossal schema that takes time to get acquainted with.. We are currently in the process of making an \
	MVD for the Heritage BIM field with IfcDoc, see also my github page.",
	"VersionControl" : ""
}

function changeDefOver(e) {
  if (e.target.id in descriptions) {
  	document.getElementById("descriptions").innerHTML = descriptions[e.target.id];
  }

  //e.target.classList.toggle('opacity-toggle');
}
