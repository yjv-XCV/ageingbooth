<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="vendor/libs/jquery.min.js"></script>
	<script src="vendor/libs/pixi.js"></script>
	<script src="vendor/libs/jquery.imgareaselect.pack.js"></script>
	<script>
		$(function(){
			var img = $('#source')[0],
			image_cc = img.getContext('2d');
			var image = new Image();
			$(image).load(function(){
				image_cc.drawImage(image, 0, 0, 740, 1012);
			});
			image.src = 'imgs/original/001.jpeg';

			var app = new PIXI.Application(740, 1012, { view: $('#dev')[0], antialias: true, forceCanvas: true, transparent: true });
			document.body.appendChild(app.view);
			app.stage.interactive = true;

			divider = new PIXI.Sprite.fromImage('assets/imgs/divider.png');
			divider.x = 325;
			divider.y = -17;

			imgFromCanvas = new PIXI.Sprite(PIXI.Texture.fromCanvas(img));

			var container = new PIXI.Container();

			container.addChild(imgFromCanvas);
		    app.stage.addChild(container);
		    app.stage.addChild(divider);
			
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
		    $('#dev').on('mousedown', function(){
		    	isDragging = 1;
		    })
		    $('#dev').on('mouseup', function(){
		    	isDragging = 0;
		    });
		    $('#dev').on('mouseleave', function(){
		    	isDragging = 0;
		    })

		    $('#dev').on('mousemove', function(event) {
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

					divider.x = position - 45;
				}

			    event.preventDefault();

			});
		});
	</script>
</head>
<body>
	<canvas width="740" height="1012" id="source"></canvas>
	<canvas width="740" height="1012" id="dev"></canvas>
</body>
</html>