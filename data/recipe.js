Recipe.prototype.name = ""; //String
Recipe.prototype.id = ""; //String
Recipe.prototype.ingredients = []; //Array of Ingredient Objects

function Recipe(config){
	this.name = config['name'];
	this.id = config['id'];
	this.ingredients = config['ingredients']
}