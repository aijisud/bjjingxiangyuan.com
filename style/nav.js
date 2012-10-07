// JavaScript Document

window.onload = function(){
	var navName = document.getElementById("nav").getElementsByTagName("a")
	for(var i=0;i<navName.length;i++){
		if(navName[i].className != "cur"){
			navName[i].onmouseover = function()
			{
				this.className = "cur";
			}
			navName[i].onmouseout = function()
			{
				this.className = "";
			}
		}
	}
}