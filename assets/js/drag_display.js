var original_half = function(){
	var img = $('#snap-canvas')[0];

	var app = new PIXI.Application(740, 1012, { view: $('#half-face')[0], antialias: true, forceCanvas: true, transparent: true });
	app.stage.interactive = true;

	divider = new PIXI.Sprite.fromImage('assets/imgs/divider.png');
	now = new PIXI.Sprite.fromImage('assets/imgs/page04-text-now.png');
	divider.x = 325;
	divider.y = -17;

	imgFromCanvas = new PIXI.Sprite(PIXI.Texture.fromCanvas(img));

	var container = new PIXI.Container();

	container.addChild(imgFromCanvas);
    container.addChild(now);
    app.stage.addChild(container);
    app.stage.addChild(divider);

    now.x = 5;
    now.y = 5;
	
	var thing = new PIXI.Graphics();
	app.stage.addChild(thing);
	thing.lineStyle(0);			
    container.mask = thing;

	thing.beginFill(0x8bc5ff, 1);
    thing.moveTo(0, 0);
    thing.lineTo(0, 1012);
    thing.lineTo(740 / 2, 1012);
    thing.lineTo(740 / 2, 0);

    var isDragging = 0;
    $('#half-face').on('mousedown', function(){
    	isDragging = 1;
    })
    $('#half-face').on('mouseup', function(){
    	isDragging = 0;
    });
    $('#half-face').on('mouseleave', function(){
    	isDragging = 0;
    })

    $('#half-face').on('mousemove', function(event) {
    	if(isDragging){
	    	left = $(this).position().left;
	    	position = event.clientX - left;
	    	position = position < 10 ? 10 : position;
	    	position = position > 1002 ? 1002 : position;

		    thing.clear();
		    thing.moveTo(0, 0);
		    thing.lineTo(0, 1012);
		    thing.lineTo(position, 1012);
		    thing.lineTo(position, 0);

			divider.x = position - 45; }

	    event.preventDefault();

	});
};