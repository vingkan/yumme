var plate = new PrepSpace({
	name: 'My Plate',
	id: 'plate',
	image: 'style/img/plate.png'
});
plate.addToLocations();

var sink = new PrepSpace({
	name: 'Sink',
	id: 'sink',
	image: 'style/img/sink.png'
});
sink.addToLocations();

var strawberry = new Ingredient({
	name: 'Strawberry',
	id: 'strawberry',
	image: 'style/img/strawberry.png'
});

var honey = new Ingredient({
	name: 'Honey',
	id: 'honey',
	image: 'style/img/honey.png'
});

var honey = new Ingredient({
	name: 'Honey',
	id: 'honey1',
	image: 'style/img/honey.png'
});

var faucet = new Utensil({
	name: 'Faucet',
	id: 'faucet',
	width: 107.686,
	height: 213.472,
	alignment: 'center',
	image: 'style/img/faucet-off.png',
	draggable: false,
	state: 'on',
	action: 'rinse'
});
sink.addUtensil(faucet);

var collander = new Utensil({
	name: 'Faucet',
	id: 'collander',
	width: 133.605,
	height: 133.605,
	alignment: 'center',
	image: 'style/img/redcollander.png',
	draggable: false,
	state: 'on',
	action: 'rinse'
});
sink.addUtensil(collander);