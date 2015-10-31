document.getElementById('bar').style.left = "0vw";

function toggleSideBar(sideBarID){
	var sideBar = document.getElementById(sideBarID);
	if(sideBar.style.left == '0vw'){
		sideBar.style.left = '-50vw';
	}
	else{
		sideBar.style.left = '0vw';
	}
}