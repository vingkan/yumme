PrepSpace.prototype.name = ""; //String
PrepSpace.prototype.id = ""; //String
PrepSpace.prototype.image = ""; //Path

function PrepSpace(config){
	this.name = config['name'];
	this.id = config['id'];
	this.image = "'" + config['image'] + "'";
}

PrepSpace.prototype.toHTML = function(){
	var html = '';
	html += '<div class="location" ';
	html += 'id="' + this.id + '" ';
	html += 'style="background-image: url(' + this.image + ');"';
	html += '>'
	html += '<label>' + this.name + '</label>';
	html += '</div>'
	return html;
}