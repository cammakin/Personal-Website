/*
	Author: 		Cam Makin
	Creation Date: 	7/7/2019
	Revision Date:  7/7/2019
	Comments: Custom JavaScript for personal site
*/

function changeProject(requestedProject){
	var x = document.getElementById(requestedProject);
	if (x.style.display != 'block'){
		x.style.display = 'block';
	}
	else{
		x.style.display = 'none';
	}
}