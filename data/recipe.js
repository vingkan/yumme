Recipe.prototype.name = ""; //String
Recipe.prototype.id = ""; //String
Recipe.prototype.ingredients = []; //Array of Ingredient Objects
Recipe.prototype.instructions = []; //Array of Strings

function Recipe(config){
	this.name = config['name'];
	this.id = config['id'];
	this.ingredients = config['ingredients']
	this.instructions = config['instructions'];
}

Recipe.prototype.toHTML = function(){
	var html = "";
	html += '<h3>' + this.name + '</h3>';
	html += '<ol>';
	var size = instructions.length;
	for(var i = 0; i < size; i++){
		html += '<li>' + instructions[i] + '</li>';
	}
	html += '</ol>';
	return html;
}