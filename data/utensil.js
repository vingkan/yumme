Utensil.prototype.name = ""; //String
Utensil.prototype.id = ""; //String
Utensil.prototype.image = ""; //Path

function Utensil(config){
	this.name = config['name'];
	this.width = parseFloat(config['width']);
	this.height = parseFloat(config['height']);
	this.id = config['id'];
	this.image = config['image'];
}

Utensil.prototype.getScaledWidth = function(){
	var scaled = (90.0 / 400.0) * (this.width);
	console.log('getScaledWidth = ' + scaled);
	return scaled;
}

Utensil.prototype.getScaledHeight = function(){
	var scaled = (90.0 / 400.0) * (this.height);
	console.log('getScaledHeight = ' + scaled);
	return scaled;
}

Utensil.prototype.toHTML = function(){
	var html = '';
	html += '<div class="utensil" ';
	html += 'id="' + this.id + '" ';
	html += 'style="width: ' + this.getScaledWidth() + 'vw;';
	html += 'height: ' + this.getScaledHeight() + 'vw;';
	html += 'background-image: url(' + this.image + ');"';
	html += '>';
	html += '<span class="label">' + this.name + '</span>';
	html += '</div>';
	console.log(html)
	return html;
}