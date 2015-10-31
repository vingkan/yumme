function closeAllSideBars(){
	var sidebars = document.getElementsByClassName('sidebar');
	var size = sidebars.length;
	for(var s = 0; s < size; s++){
		toggleSideBar(sidebars[s].id, true);
	}
}

function toggleSideBar(sideBarID, forceClose){
	var sideBar = $('#' + sideBarID);
	if(forceClose){
		sideBar.removeClass('sidebar-open');
		sideBar.addClass('sidebar-close');
	}
	else{
		if(sideBar.hasClass('sidebar-open')){
			sideBar.removeClass('sidebar-open');
			sideBar.addClass('sidebar-close');
		}
		else{
			sideBar.removeClass('sidebar-close');
			sideBar.addClass('sidebar-open');
		}
	}
}