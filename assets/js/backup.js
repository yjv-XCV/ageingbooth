backup = function(){
	var app = new PIXI.Application(740, 1012, { view: $('#backup')[0], antialias: true, forceCanvas: true, transparent: true });
	app.stage.interactive = true;

	left_eye = new PIXI.Graphics();
	right_eye = new PIXI.Graphics();
	mouth = new PIXI.Graphics();

    left_eye.interactive = true;
    right_eye.interactive = true;
    mouth.interactive = true;

	app.stage.addChild(left_eye);
	app.stage.addChild(right_eye);
	app.stage.addChild(mouth);

    var position = 
    {
        leftEye: [240, 335],
        rightEye: [500, 335],
        mouth: [370, 655]
    };

	left_eye.beginFill(0xff0000, 0.4);
    left_eye.drawCircle(240, 335, 30);

	right_eye.beginFill(0xff0000, 0.4);
    right_eye.drawCircle(500, 335, 30);

	mouth.beginFill(0xff0000, 0.4);
    mouth.moveTo(280, 630);
    mouth.lineTo(280, 680);
    mouth.lineTo(460, 680);
    mouth.lineTo(460, 630);

    var isDraggingA = 0, isDraggingB = 0, isDraggingC = 0;
    left_eye.on('mousedown', function(){
        isDraggingA = 1;
    });
    right_eye.on('mousedown', function(){
        isDraggingB = 1;
    });
    mouth.on('mousedown', function(){
        isDraggingC = 1;
    });

    left_eye.on('mouseup', function(){
        isDraggingA = 0;
    });
    right_eye.on('mouseup', function(){
        isDraggingB = 0;
    });
    mouth.on('mouseup', function(){
        isDraggingC = 0;
    });

    left_eye.on('mouseout', function(){
        isDraggingA = 0;
    });
    right_eye.on('mouseout', function(){
        isDraggingB = 0;
    });
    mouth.on('mouseout', function(){
        isDraggingC = 0;
    });

    left_eye.on('mousemove', (event) => {
        var x = event.data.global.x,
        y = event.data.global.y;        
        if(isDraggingA){
            x = x > 340 ? 340 : x;
            y = y > 506 ? 506 : y;
            left_eye.clear();
            left_eye.beginFill(0xff0000, 0.4);
            left_eye.drawCircle(x, y, 30);
            position.leftEye = [x, y];

            right_eye.clear();
            right_eye.beginFill(0xff0000, 0.4);
            right_eye.drawCircle(740 - x, y, 30);
            position.rightEye = [740 - x, y];

        } else if(isDraggingB){
            x = x < 400 ? 400 : x;
            y = y > 506 ? 506 : y;
            right_eye.clear();
            right_eye.beginFill(0xff0000, 0.4);
            right_eye.drawCircle(x, y, 30);
            position.rightEye = [x, y];

            left_eye.clear();
            left_eye.beginFill(0xff0000, 0.4);
            left_eye.drawCircle(740 - x, y, 30);
            position.leftEye = [740 - x, y];
        } else if(isDraggingC){
            x = x > 520 ? 520 : x < 220 ? 220 : x;
            y = y < 506 ? 506 : y;
            mouth.clear();
            mouth.beginFill(0xff0000, 0.4);
            mouth.moveTo(x - 90, y - 25);
            mouth.lineTo(x - 90, y + 25);
            mouth.lineTo(x + 90, y + 25);
            mouth.lineTo(x + 90, y - 25);
            position.mouth = [x, y];
        }
    });

    $('#confirm').on('click', function(){
        // tcs calculation
        console.log(position);
    });
};

