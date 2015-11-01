function closeAllSideBars(){
	var sidebars = document.getElementsByClassName('sidebar');
	var size = sidebars.length;
	for(var s = 0; s < size; s++){
		toggleSideBar(sidebars[s].id, true);
	}
}

function toggleSideBar(sideBarID, forceClose){
	toggleMenu('options', true);
	var sideBar = $('#' + sideBarID);
	var menu = $('#openMenu');
	if(forceClose){
		sideBar.removeClass('sidebar-open');
		sideBar.addClass('sidebar-close');
		menu.removeClass('button-right');
		menu.addClass('button-left');
	}
	else{
		if(sideBar.hasClass('sidebar-open')){
			sideBar.removeClass('sidebar-open');
			sideBar.addClass('sidebar-close');
			menu.removeClass('button-right');
			menu.addClass('button-left');
		}
		else{
			sideBar.removeClass('sidebar-close');
			sideBar.addClass('sidebar-open');
			menu.removeClass('button-left');
			menu.addClass('button-right');
		}
	}
}

function toggleMenu(menuID, forceClose){
	var menu = $('#' + menuID);
	if(forceClose){
		menu.removeClass('options-open');
		menu.addClass('options-close');
	}
	else{
		if(menu.hasClass('options-open')){
			menu.removeClass('options-open');
			menu.addClass('options-close');
		}
		else{
			menu.removeClass('options-close');
			menu.addClass('options-open');
		}
	}
	enableDrags();
	enableDrops();
}

var draggables = [];

function registerDraggable(ingredientID){
	draggables.push(ingredientID);
}

function enableDrags(){
	var size = draggables.length;
	var ingredientID = "INITIAL";
	for(var d = 0; d < size; d++){
		ingredientID = draggables[d];
		$('#' + ingredientID).draggable();
		console.log('draggable: ' + '#' + ingredientID);
		console.log($('#' + ingredientID));
	}
	console.log("Enable All Drags!");
}

var droppables = [];

function registerDroppable(ingredientID){
	droppables.push(ingredientID);
}

function enableDrops(){
	var size = droppables.length;
	var ingredientID = "INITIAL";
	for(var d = 0; d < size; d++){
		ingredientID = droppables[d];
		acceptDrops(ingredientID);
	}
	console.log("Enable All Drops!");
}

function acceptDrops(targetID){
	$('#' + targetID).droppable({
		accept: '.ingredient',
		drop: function(event, ui){
			var dropID = $(ui.draggable).attr('id');
			$(ui.draggable).remove();
			var toDrop = getIngredient(dropID);
			$(this).append(toDrop.toHTML());
			$('#' + dropID).draggable();
			closeAllSideBars();
		}
	});
	console.log('enabled drops on: ' + targetID);
}