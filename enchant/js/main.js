enchant();

window.onload = function(){
	var game = new Game(320, 440);
	
	var bgPath = 'enchant/res/BG.png';
	game.preload(bgPath);
	game.fps = 30;
	game.scale = 1;
	
	game.onload = function(){
		console.log("Game Initialized");

		var scene, label, bg;

		scene = new Scene();
		label = new Label("Label");
		bg = new Sprite(320, 440);
		bg.image = game.assets[bgPath];

		scene.addChild(bg);
		scene.addChild(label);
		game.pushScene(scene);

	};
	game.start();
}