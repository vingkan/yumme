Utensil.prototype.name = ""; //String
Utensil.prototype.image = ""; //Path

function Utensil(config){
	this.name = config['name'];
	this.image = config['image'];
}