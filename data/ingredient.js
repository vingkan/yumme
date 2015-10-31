Ingredient.prototype.name = ""; //String
Ingredient.prototype.id = ""; //String
Ingredient.prototype.image = ""; //Path

function Ingredient(config){
	this.name = config['name'];
	this.id = config['id'];
	this.image = config['image'];
}

Ingredient.prototype.toHTML = function(){
	var html = '';
	html += '<div class="ingredient" ';
	html += 'id="' + this.id + '" ';
	html += 'style="background-image: url(' + this.image + ');"';
	html += '>'
	html += '<label>' + this.name + '</label>';
	html += '</div>'
	return html;
}
