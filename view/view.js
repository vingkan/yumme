function closeAllSideBars(){
	var sidebars = document.getElementsByClassName('sidebar');
	var size = sidebars.length;
	for(var s = 0; s < size; s++){
		sidebars[s].style.left = '-52vw';
	}
}

function toggleSideBar(sideBarID){
	var sideBar = document.getElementById(sideBarID);
	if(sideBar.style.left == '0vw'){
		sideBar.style.left = '-52vw';
	}
	else{
		sideBar.style.left = '0vw';
	}
}