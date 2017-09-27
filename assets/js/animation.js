$(function(){

	var app1 = new PIXI.Application(400, 300, {transparent:true});
	var app2 = new PIXI.Application(400, 300, {transparent:true});
	var app3 = new PIXI.Application(400, 300, {transparent:true});
	$('#step1').append(app1.view);
	$('#step2').append(app2.view);
	$('#step3').append(app3.view);

	PIXI.loader
	    .add('assets/animation/step1_start.json')
	    .add('assets/animation/step1_loop.json')
	    .add('assets/animation/step1_end.json')
	    .add('assets/animation/step2_start.json')
	    .add('assets/animation/step2_loop.json')
	    .add('assets/animation/step2_end.json')
	    .add('assets/animation/step3_start.json')
	    .add('assets/animation/step3_loop.json')
	    .add('assets/animation/step3_end.json')
	    .load(onAssetsLoaded);

	function onAssetsLoaded()
	{
	    // create an array of textures from an image path
	    var start_frames = [[],[],[],[]];
	    var loop_frames = [[],[],[],[]];
	    var end_frames = [[],[],[],[]];

	    for (var i = 0; i < 25; i++) {
	        var val = i < 10 ? '0' + i : i;
	        loop_frames[1].push(PIXI.Texture.fromFrame('Step1_Loop_000' + val + '.png'));
	        loop_frames[2].push(PIXI.Texture.fromFrame('Step2_Loop_000' + val + '.png'));
	        loop_frames[3].push(PIXI.Texture.fromFrame('Step3_Loop_000' + val + '.png'));
	    }
	    for (var i = 25; i < 50; i++) {
	        var val = i < 10 ? '0' + i : i;
	        end_frames[1].push(PIXI.Texture.fromFrame('Step1_End_000' + val + '.png'));
	        end_frames[2].push(PIXI.Texture.fromFrame('Step2_End_000' + val + '.png'));
	        end_frames[3].push(PIXI.Texture.fromFrame('Step3_End_000' + val + '.png'));
	    }
	    for (var i = 50; i < 75; i++) {
	        var val = i < 10 ? '0' + i : i;
	        start_frames[1].push(PIXI.Texture.fromFrame('Step1_Start_000' + val + '.png'));
	        start_frames[2].push(PIXI.Texture.fromFrame('Step2_Start_000' + val + '.png'));
	        start_frames[3].push(PIXI.Texture.fromFrame('Step3_Start_000' + val + '.png'));
	    }

	    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
	    var step1_start = new PIXI.extras.AnimatedSprite(start_frames[1]);
	    var step1_loop = new PIXI.extras.AnimatedSprite(loop_frames[1]);
	    var step1_end = new PIXI.extras.AnimatedSprite(end_frames[1]);

	    var step2_start = new PIXI.extras.AnimatedSprite(start_frames[2]);
	    var step2_loop = new PIXI.extras.AnimatedSprite(loop_frames[2]);
	    var step2_end = new PIXI.extras.AnimatedSprite(end_frames[2]);

	    var step3_start = new PIXI.extras.AnimatedSprite(start_frames[3]);
	    var step3_loop = new PIXI.extras.AnimatedSprite(loop_frames[3]);
	    var step3_end = new PIXI.extras.AnimatedSprite(end_frames[3]);

	    /*
	     * An AnimatedSprite inherits all the properties of a PIXI sprite
	     * so you can change its position, its anchor, mask it, etc
	     */
	    step1_loop.x = app1.renderer.width / 2;
	    step1_loop.y = app1.renderer.height / 2;
	    step1_loop.anchor.set(0.5);
	    step1_loop.animationSpeed = 0.5;
	  	step1_loop.alpha = 0;
	    step1_start.x = app1.renderer.width / 2;
	    step1_start.y = app1.renderer.height / 2;
	    step1_start.anchor.set(0.5);
	    step1_start.animationSpeed = 0.5;
	    step1_start.loop = false;
	    step1_start.onComplete = function(){
	    	step1_start.alpha = 0;
	    	step1_loop.alpha = 1;
	    	step1_loop.play();
	    };
	    step1_start.play();
	    step1_end.x = app1.renderer.width / 2;
	    step1_end.y = app1.renderer.height / 2;
	    step1_end.anchor.set(0.5);
	    step1_end.animationSpeed = 0.5;
	    step1_end.loop = false;
	    step1_end.onComplete = function(){
	    	step1_end.alpha = 0;
	    	step1_start.gotoAndStop(0);
	    	step1_start.alpha = 1;
	    }
	  	step1_end.alpha = 0;
	    
	    step2_loop.x = app2.renderer.width / 2;
	    step2_loop.y = app2.renderer.height / 2;
	    step2_loop.anchor.set(0.5);
	    step2_loop.animationSpeed = 0.5;
	    step2_loop.alpha = 0;
	    step2_start.x = app2.renderer.width / 2;
	    step2_start.y = app2.renderer.height / 2;
	    step2_start.anchor.set(0.5);
	    step2_start.animationSpeed = 0.5;
	    step2_start.loop = false;
	    step2_start.onComplete = function(){
	    	step2_start.alpha = 0;
	    	step2_loop.alpha = 1;
	    	step2_loop.play();
	    };
	    step2_end.x = app2.renderer.width / 2;
	    step2_end.y = app2.renderer.height / 2;
	    step2_end.anchor.set(0.5);
	    step2_end.animationSpeed = 0.5;
	    step2_end.loop = false;
	    step2_end.onComplete = function(){
	    	step2_end.alpha = 0;
	    	step2_start.gotoAndStop(0);
	    	step2_start.alpha = 1;
	    }
	  	step2_end.alpha = 0;

	    step3_loop.x = app3.renderer.width / 2;
	    step3_loop.y = app3.renderer.height / 2;
	    step3_loop.anchor.set(0.5);
	    step3_loop.animationSpeed = 0.5;
    	step3_loop.alpha = 0;
	    step3_start.x = app3.renderer.width / 2;
	    step3_start.y = app3.renderer.height / 2;
	    step3_start.anchor.set(0.5);
	    step3_start.animationSpeed = 0.5;
	    step3_start.loop = false;
	    step3_start.onComplete = function(){
	    	step3_start.alpha = 0;
	    	step3_loop.alpha = 1;
	    	step3_loop.play();
	    };
	    step3_end.x = app3.renderer.width / 2;
	    step3_end.y = app3.renderer.height / 2;
	    step3_end.anchor.set(0.5);
	    step3_end.animationSpeed = 0.5;
	    step3_end.loop = false;
	    step3_end.onComplete = function(){
	    	step3_end.alpha = 0;
	    	step3_start.gotoAndStop(0);
	    	step3_start.alpha = 1;
	    }
	  	step3_end.alpha = 0;

	  	stage = 1;

	  	$(document).on('stepA', function(){
	  		if (stage == 2) {
	  			step2_start.alpha = 0;
	  			step2_loop.alpha = 0;
	  			step2_end.alpha = 1;
	  			step2_end.play();
	  			step1_start.play();
	  		}

	  		if (stage == 3) {
	  			step3_start.alpha = 0;
	  			step3_loop.alpha = 0;
	  			step3_end.alpha = 1;
	  			step3_end.play();
	  			step1_start.play();
	  		}
	  		stage = 1;
	  	});
	  	$(document).on('stepB', function(){
	  		if (stage == 1) {
	  			step1_start.alpha = 0;
	  			step1_loop.alpha = 0;
	  			step1_end.alpha = 1;
	  			step1_end.play();
	  			step2_start.play();
	  		}

	  		if (stage == 3) {
	  			step3_start.alpha = 0;
	  			step3_loop.alpha = 0;
	  			step3_end.alpha = 1;
	  			step3_end.play();
	  			step2_start.play();
	  		}
	  		stage = 2;

	  	});
	  	$(document).on('stepC', function(){
			if (stage == 2) {
	  			step2_start.alpha = 0;
	  			step2_loop.alpha = 0;
	  			step2_end.alpha = 1;
	  			step2_end.play();
	  			step3_start.play();
	  		}

	  		if (stage == 1) {
	  			step1_start.alpha = 0;
	  			step1_loop.alpha = 0;
	  			step1_end.alpha = 1;
	  			step1_end.play();
	  			step3_start.play();
	  		}
	  		stage = 3;
	  	});


	    app1.stage.addChild(step1_start);
	    app1.stage.addChild(step1_loop);
	    app1.stage.addChild(step1_end);
	    app2.stage.addChild(step2_start);
	    app2.stage.addChild(step2_loop);
	    app2.stage.addChild(step2_end);
	    app3.stage.addChild(step3_start);
	    app3.stage.addChild(step3_loop);
	    app3.stage.addChild(step3_end);
	}

});