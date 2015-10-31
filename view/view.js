document.getElementById('cart').style.left = "-52vw";

function toggleSideBar(sideBarID){
	var sideBar = document.getElementById(sideBarID);
	if(sideBar.style.left == '0vw'){
		sideBar.style.left = '-52vw';
	}
	else{
		sideBar.style.left = '0vw';
	}
}