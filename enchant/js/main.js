enchant();

window.onload = function(){
	var game = new Game(320, 440);
	
	var bgPath = 'enchant/res/BG.png';
	game.preload(bgPath);
	game.fps = 30;
	game.scale = 1;
	
	game.onload = function(){
		console.log("Game Initialized");

		var scene = new SceneGame();
		game.pushScene(scene);

	};
	game.start();
}

var SceneGame = Class.create(Scene, {
	initialize: function(){
		var game, label, background, penguin;
		Scene.apply(this);
		game = Game.instance;
		var backgroundPath = 'enchant/res/BG.png';
		var penguinPath = 'enchant/res/fishSheet.png';
		game.preload(backgroundPath, penguinPath);
		label = new Label("Hi! Ocean!");
		background = new Sprite(320, 440);
		background.image = game.assets[backgroundPath];
		penguin = new Sprite(30, 43);
		penguin.image = game.assets[penguinPath];
		penguin.x = game.width/2 - penguin.width/2;
		penguin.y = 280;
		this.addChild(background);
		this.addChild(label);
		this.addChild(penguin);
	},
	toString: function(){
		return "New Game";
	}
});