PrepSpace.prototype.name = ""; //String
PrepSpace.prototype.image = ""; //Path

function PrepSpace(config){
	this.name = config['name'];
	this.image = "'" + config['image'] + "'";
}

PrepSpace.prototype.toHTML = function(){
	var html = '';
	html += '<div class="location" ';
	html += 'id="' + this.name + '" ';
	html += 'style="background-image: url(' + this.image + ');"';
	html += '>'
	html += '<label>' + this.name + '</label>';
	html += '</div>'
	return html;
}

var table = new PrepSpace({
	name: 'Table',
	image: 'style/img/table.jpg'
});
console.log(table.toHTML());
document.getElementById('locationSpace').innerHTML = table.toHTML();