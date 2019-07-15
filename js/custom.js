/*
	Author: Cam Makin
	Creation Date: 	7/7/2019
	Revision Date:  7/10/2019
	Comments: Custom JavaScript for personal site
			  Will close all tabs and open requested tab from button
	Repo: https://github.com/cammakin/Personal-Website
*/

function changeProject(requestedProject){
	var requested_tab = document.getElementById(requestedProject);

	if(requested_tab.style.display == 'block')
		return;
	var all_tabs = document.getElementsByClassName("tab");
	for(var i = 0; i < all_tabs.length; i++){
		all_tabs[i].style.display = 'none';
	}
	requested_tab.style.display = 'block';

}// changeProject()