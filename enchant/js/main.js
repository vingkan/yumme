enchant();

window.onload = function(){
	var game = new Game(320, 320);
	
	game.preload('enchant/res/BG.png');
	game.fps = 30;
	game.scale = 1;
	
	game.onload = function(){
		console.log("Game Initialized");

		/*var scene = new Scene();
		game.pushScene(scene);

		var sprite = new Sprite(64, 64);
		//sprite.image = game.assets['style/img/strawberry..png']
		scene.addChild(sprite);*/

	};
	game.start();
}