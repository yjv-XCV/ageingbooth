backup = function(){
	var app = new PIXI.Application(740, 1012, { view: $('#backup')[0], antialias: true, forceCanvas: true, transparent: true });
	app.stage.interactive = true;

    eye = PIXI.Texture.fromImage('assets/imgs/page03-eye-overlay.png')
	left_eye = new PIXI.Sprite(eye);
	right_eye = new PIXI.Sprite(eye);
    eye_width = 83;
    eye_height = 83;

	mouth = new PIXI.Sprite(PIXI.Texture.fromImage('assets/imgs/page03-mouth-overlay.png'));
    mouth_width = 216;
    mouth_height = 86;

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

    left_eye.x = position.leftEye[0] - eye_width / 2;
    left_eye.y = position.leftEye[1] - eye_height / 2;

    right_eye.x = position.rightEye[0] - eye_width / 2;
    right_eye.y = position.rightEye[1] - eye_height / 2;

    mouth.x = position.mouth[0] - mouth_width / 2;
	mouth.y = position.mouth[1] - mouth_height / 2;

    left_eye.off('pointerdown pointerup pointermove');
    right_eye.off('pointerdown pointerup pointermove');
    mouth.off('pointerdown pointerup pointermove');

    var isDraggingA = 0, isDraggingB = 0, isDraggingC = 0;
    left_eye.on('pointerdown', function(){
        isDraggingA = 1;
        isDraggingB = 0;
        isDraggingC = 0;
    });
    right_eye.on('pointerdown', function(){
        isDraggingB = 1;
        isDraggingA = 0;
        isDraggingC = 0;
    });
    mouth.on('pointerdown', function(){
        isDraggingC = 1;
        isDraggingB = 0;
        isDraggingA = 0;
    });

    left_eye.on('pointerup', function(){
        isDraggingA = 0;
    });
    right_eye.on('pointerup', function(){
        isDraggingB = 0;
    });
    mouth.on('pointerup', function(){
        isDraggingC = 0;
    });

    left_eye.on('pointerout', function(){
        isDraggingA = 0;
    });
    right_eye.on('pointerout', function(){
        isDraggingB = 0;
    });
    mouth.on('pointerout', function(){
        isDraggingC = 0;
    });

    left_eye.on('pointercancel', function(){
        isDraggingA = 0;
    });
    right_eye.on('pointercancel', function(){
        isDraggingB = 0;
    });
    mouth.on('pointercancel', function(){
        isDraggingC = 0;
    });

    left_eye.on('pointermove', (event) => {
        var x = event.data.global.x,
        y = event.data.global.y;
        if(isDraggingA){
            console.log('left');
            x = x > 340 ? 340 : x;
            y = y > 506 ? 506 : y;
            x = x < 20 ? 20 : x;
            y = y < 20 ? 20 : y;
            left_eye.x = x - eye_width / 2;
            left_eye.y = y - eye_height / 2;
            position.leftEye = [x, y];

            // right_eye.x = (740 - x) - eye_width / 2;
            // right_eye.y = y - eye_height / 2;
            // position.rightEye = [740 - x, y];
            // console.log(position.leftEye);
        } else if(isDraggingB){
            console.log('right');
            x = x < 400 ? 400 : x;
            y = y > 506 ? 506 : y;
            x = x > 720 ? 720 : x;
            y = y < 20 ? 20 : y;
            // left_eye.x = (740 - x) - eye_width / 2;
            // left_eye.y = y - eye_height / 2;
            // position.leftEye = [740 - x, y];

            right_eye.x = x - eye_width / 2;
            right_eye.y = y - eye_height / 2;
            position.rightEye = [x, y];
            // console.log(position.rightEye);
        } else if(isDraggingC){
            console.log('mouth');
            x = x > 520 ? 520 : x < 220 ? 220 : x;
            y = y < 506 ? 506 : y;
            y = y > 1002 ? 1002 : y;
            mouth.x = x - mouth_width / 2;
            mouth.y = y - mouth_height / 2;
            position.mouth = [x, y];
            // console.log(position.mouth);
        }
        $(resetInactivity);
    });

    $('#confirm').on('tap', function(){
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

        // console.log(tcs);
    });
};

