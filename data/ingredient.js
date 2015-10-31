Ingredient.prototype.name = ""; //String
Ingredient.prototype.image = ""; //Path

function Ingredient(config){
	this.name = config['name'];
	this.image = config['image'];
}