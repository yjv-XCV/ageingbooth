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
        tcs = [];
        for (var i = 0; i < 71; i++) {
            tcs.push(Array(2));
        }

        // forehead
        tcs[0]  = [position.leftEye[0] - 0.55 * (position.rightEye[0] - position.leftEye[0]), position.leftEye[1]];
        tcs[14] = [position.rightEye[0] + 0.55 * (position.rightEye[0] - position.leftEye[0]), position.rightEye[1]];
        tcs[1]  = [tcs[0][0], tcs[0][1] + 0.4 * (position.mouth[1] - position.leftEye[1])];
        tcs[13] = [tcs[14][0], tcs[14][1] + 0.4 * (position.mouth[1] - position.rightEye[1])];
        tcs[17] = [position.rightEye[0] - 0.075 * (position.rightEye[0] - position.leftEye[0]), tcs[13][1] - tcs[14][1]];
        tcs[15] = [tcs[14][0] - 0.3 * (tcs[14][0] - position.rightEye[0]), position.rightEye[1] - 0.5 * (position.rightEye[1] - tcs[17][1])];
        tcs[18] = [position.rightEye[0] - 0.25 * (position.rightEye[0] - position.leftEye[0]), tcs[15][1]];
        tcs[21] = [position.leftEye[0] + 0.075 * (position.rightEye[0] - position.leftEye[0]), tcs[1][1] - tcs[0][1]];
        tcs[19] = [tcs[0][0] + 0.3 * (position.leftEye[0] - tcs[0][0]), position.leftEye[1] - 0.5 * (position.leftEye[1] - tcs[21][1])];
        tcs[22] = [position.leftEye[0] + 0.25 * (position.rightEye[0] - position.leftEye[0]), tcs[19][1]];
        
        // left eye
        tcs[23] = [position.leftEye[0] - 0.4 * (position.leftEye[0] - tcs[0][0]), position.leftEye[1]];
        tcs[24] = [position.leftEye[0], position.leftEye[1] - 0.2 * (position.leftEye[1] - tcs[21][1])];
        tcs[25] = [position.leftEye[0] + 0.4 * (position.leftEye[0] - tcs[0][0]), position.leftEye[1]];
        tcs[26] = [position.leftEye[0], position.leftEye[1] + 0.2 * (position.leftEye[1] - tcs[21][1])];
        
        // right eye
        tcs[28] = [position.rightEye[0] - 0.4 * (position.rightEye[0] - tcs[14][0]), position.rightEye[1]];
        tcs[29] = [position.rightEye[0], position.rightEye[1] - 0.2 * (position.rightEye[1] - tcs[17][1])];
        tcs[30] = [position.rightEye[0] + 0.4 * (position.rightEye[0] - tcs[14][0]) , position.rightEye[1]];
        tcs[31] = [position.rightEye[0], position.rightEye[1] + 0.2 * (position.rightEye[1] - tcs[17][1])];
        
        // jaws
        tcs[2] = [tcs[0][0], tcs[1][1] + 0.8 * (tcs[1][1] - tcs[0][1])];  tcs[12] = [tcs[14][0], tcs[2][1]];
        tcs[3] = [(tcs[19][0] + tcs[0][0]) / 2, tcs[2][1] + tcs[1][1] - tcs[0][1]];   tcs[11] = [(tcs[14][0] + tcs[15][0]) / 2, tcs[3][1]];
        tcs[4] = [tcs[23][0], tcs[3][1] + 0.7 * (tcs[1][1] - tcs[0][1])];             tcs[10] = [tcs[28][0], tcs[4][1]];
        tcs[5] = [tcs[26][0], tcs[4][1] + 0.5 * (tcs[1][1] - tcs[0][1])];             tcs[9]  = [tcs[31][0], tcs[5][1]];
        tcs[6] = [tcs[25][0], tcs[5][1] + 0.2 * (tcs[1][1] - tcs[0][1])];             tcs[8]  = [tcs[30][0], tcs[6][1]];
        tcs[7] = [(position.rightEye[0] + position.leftEye[0]) / 2, position.mouth[1] + (position.mouth[1] - (position.rightEye[1] + position.leftEye[1]) / 2) / 2];
        
        
        // nose
        tcs[35] = [tcs[6][0], (tcs[1][1] + tcs[2][1]) / 2]; tcs[39] = [tcs[8][0],  (tcs[13][1] + tcs[12][1]) / 2]; 
        
        // mouth
        tcs[53] = [tcs[7][0],  position.mouth[1] + (position.mouth[1] - position.rightEye[1]) / 7];
        tcs[44] = [(tcs[6][0] + tcs[5][0]) / 2, tcs[3][1]]; tcs[50] = [(tcs[9][0] + tcs[8][0]) / 2, tcs[11][1]];
        tcs[46] = [tcs[7][0] - 0.4 * (tcs[7][0] - tcs[6][0]), ((tcs[3][1] - 0.4 * (tcs[3][1] - tcs[2][1])) + (tcs[11][1] - 0.4 * (tcs[11][1] - tcs[12][1]))) / 2]; tcs[48] = [tcs[7][0] + 0.4 * (tcs[8][0] - tcs[7][0]), tcs[46][1]];

        console.log(position);
        console.log(tcs);
    });
};

