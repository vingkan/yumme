var plate = new PrepSpace({
	name: 'My Plate',
	id: 'plate',
	image: 'style/img/plate.png'
});
document.getElementById('locationSpace').innerHTML += plate.toHTML();

var sink = new PrepSpace({
	name: 'Sink',
	id: 'sink',
	image: 'style/img/sink.png'
});
document.getElementById('locationSpace').innerHTML += sink.toHTML();

var table = new PrepSpace({
	name: 'Table',
	id: 'table',
	image: 'style/img/table.jpg'
});
document.getElementById('locationSpace').innerHTML += table.toHTML();

var strawberry = new Ingredient({
	name: 'Strawberry',
	id: 'strawberry',
	image: 'style/img/strawberry.png'
});
document.getElementById('container-cart').innerHTML += strawberry.toHTML();

var honey = new Ingredient({
	name: 'Honey',
	id: 'honey',
	image: 'style/img/honey.png'
});
document.getElementById('container-cart').innerHTML += honey.toHTML();

var faucet = new Utensil({
	name: 'Faucet',
	id: 'faucet',
	width: 107.686,
	height: 213.472,
	image: 'style/img/faucet-off.png',
	draggable: false,
	state: 'on',
	action: 'rinse'
});
sink.addUtensil(faucet);
//document.getElementById('sink').innerHTML += faucet.toHTML();

$('#' + strawberry.id).draggable();
$('#' + honey.id).draggable();

acceptDrops('plate')
acceptDrops('sink')
acceptDrops('table')