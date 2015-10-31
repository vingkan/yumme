function closeAllSideBars(){
	var sidebars = document.getElementsByClassName('sidebar');
	var size = sidebars.length;
	for(var s = 0; s < size; s++){
		toggleSideBar(sidebars[s].id, false);
	}
}

function toggleSideBar(sideBarID, forceClose){
	var sideBar = $('#' + sideBarID);
	var sideBarOpen = forceClose || sideBar.hasClass('sidebar-open');
	if(sideBarOpen){
		sideBar.removeClass('sidebar-open');
		sideBar.addClass('sidebar-close');
	}
	else{
		sideBar.removeClass('sidebar-close');
		sideBar.addClass('sidebar-open');
	}
}