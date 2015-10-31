enchant();
window.onload = function(){
	var game = new Game(320, 320);
	game.preload('style/img/enchant-images/start.png', 'end.png')
	//game.preload('style/img/strawberry.png');
	game.onload = function(){
		console.log("Game Initialized");

		var scene = new Scene();
		game.pushScene(scene);


		var sprite = new Sprite(64, 64);
		//sprite.image = game.assets['style/img/strawberry..png']
		scene.addChild(sprite);

	};
	game.start();
}