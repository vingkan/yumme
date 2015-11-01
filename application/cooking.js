var ingredientsTable = new PrepSpace({
	name: 'My Ingredients',
	id: 'ingredientsTable',
	image: 'style/img/table.png'
});
ingredientsTable.addToLocations();

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
	state: 'off',
	action: 'rinse'
});
sink.addUtensil(faucet);

var collander = new Utensil({
	name: 'Collander',
	id: 'collander',
	width: 133.450,
	height: 133.605,
	alignment: 'right',
	image: 'style/img/redcollander.png',
	draggable: true,
	state: 'static',
	action: 'shake'
});
sink.addUtensil(collander);

var recipe = new Recipe({
	name: "Berry Parfait",
	id: "berryparfait",
	ingredients: [
		strawberry,
		honey
	],
	instructions: [
		"Rinse your strawberries and let it drain in the sink.",
		"Put the yogurt into a bowl.",
		"Top the yogurt with a handful of strawberries.",
		"Drizzle the honey over your strawberries.",
		"Serve and enjoy!",
		"Serve and enjoy!",
		"Serve and enjoy!"
	]
});