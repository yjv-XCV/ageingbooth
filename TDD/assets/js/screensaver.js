// i = 0;
// //
// var image_paths = [];

// var flippingPhoto = setInterval(function(){
// 						number = parseInt(Math.random()*1000);
// 						if(!image_paths.length){
// 							number = number % 11 + 2;
// 							number = number < 10 ? '0' + number : number;
// 							path = 'imgs/original/0' + number + '.png';
// 						}
// 						else {
// 							number = number % (image_paths.length - 4);// remove the . and ..
// 							path = image_paths[number];
// 						}
// 						$('.shape#id' + ++i).shape('flip back',1000);
// 						$('.shape#id' + i).children().children('.active').siblings().children('img').attr('src', path);
// 						i %= 16;
// 					},500);

// $(function(){

// 	var app = new PIXI.Application(1080, 1920, {transparent: true});
// 	$('#foreground').append(app.view);

// 	var loader = new PIXI.loaders.Loader();

// 	for (var i = 0; i < 72; i++) {
// 		loader.add('assets/animation/screensaver/foreground' + i + '.json');
// 	}
// 	    loader.load(onAssetsLoaded);

// 	function onAssetsLoaded()
// 	{
// 	    // create an array of textures from an image path
// 	    var frames = [];

// 	    for (var i = 0; i < 72; i++) {
// 	        var val = i < 10 ? '0' + i : i;

// 	        // magically works since the spritesheet was loaded with the pixi loader
// 	        frames.push(PIXI.Texture.fromFrame('Screensaver\ foreground\ animation_1_000' + val + '.png'));
// 	    }

// 	    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
// 	    var anim = new PIXI.extras.AnimatedSprite(frames);

// 	    /*
// 	     * An AnimatedSprite inherits all the properties of a PIXI sprite
// 	     * so you can change its position, its anchor, mask it, etc
// 	     */
// 	    anim.x = app.renderer.width / 2;
// 	    anim.y = app.renderer.height / 2;
// 	    anim.anchor.set(0.5);
// 	    anim.animationSpeed = 0.3;
// 	    anim.play();

// 	    app.stage.addChild(anim);
// 	}

// });