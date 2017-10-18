var ageing = {
	launch : function() {
		this.step1();
		this.step2();
		this.step3();
	},
	step1 : function() {

				var app = new PIXI.Application({
				    'width' : 740,
				    'height' : 1012,
				    'transparent' : true
				});
				// $('#age-overlay').html(app.view);

				var filter = new PIXI.filters.ColorMatrixFilter();
				app.stage.filters = [filter];
				filter.desaturate();

				var count = 0;
				var vrtcs = new Float32Array(84);
				var uvs = new Float32Array(84);

				var index = 0;

				uvs = new Float32Array([

				    //for old1.png
				    0.17857142857142858, 0.2357142857142857,
				    0.2357142857142857, 0.15803571428571428,
				    0.42142857142857143, 0.11678571428571428,
				    0.5666666666666667, 0.11678571428571428,
				    0.7107142857142857, 0.13107142857142857,
				    0.8357142857142857, 0.2357142857142857,
				    //row one

				    0.20071428571428572, 0.4446428571428571,
				    0.2785714285714286, 0.4107142857142857,
				    0.4488095238095238, 0.4107142857142857,
				    0.5880952380952381, 0.4125,
				    0.7547619047619047, 0.4125,
				    0.8321428571428572, 0.4473214285714286,
				    //row two

				    0.19357142857142857, 0.5196428571428572,
				    0.28095238095238095, 0.46875,
				    0.4488095238095238, 0.46875,
				    0.5880952380952381, 0.4660714285714286,
				    0.7547619047619047, 0.4660714285714286,
				    0.8357142857142857, 0.5169642857142858,
				    //row three

				    0.20357142857142857, 0.5946428571428571,
				    0.31666666666666665, 0.5857142857142857,
				    0.4023809523809524, 0.5892857142857143,
				    0.6452380952380953, 0.5875,
				    0.7309523809523809, 0.5857142857142857,
				    0.8321428571428572, 0.6,
				    //row four

				    0.23214285714285715, 0.6883928571428571,
				    0.36904761904761907, 0.6803571428571429,
				    0.45714285714285713, 0.6678571428571428,
				    0.5547619047619048, 0.6678571428571428,
				    0.6333333333333333, 0.6803571428571429,
				    0.8, 0.6883928571428571,
				    //row five

				    0.29285714285714287, 0.7553571428571428,
				    0.36904761904761907, 0.7321428571428571,
				    0.45714285714285713, 0.7446428571428572,
				    0.5547619047619048, 0.7446428571428572,
				    0.6333333333333333, 0.7321428571428571,
				    0.7571428571428571, 0.7446428571428572,
				    //row six

				    0.3607142857142857, 0.8035714285714286,
				    0.43214285714285716, 0.8303571428571429,
				    0.5178571428571429, 0.8491071428571428,
				    0.5178571428571429, 0.8491071428571428,
				    0.6178571428571429, 0.8330357142857143,
				    0.6928571428571428, 0.7955357142857142
				    //row seven
				    ]);

				for (var i = 0; i < 7; i++) {
				    for (var j = 0; j < 6; j++) {
				        // uvs[index] = j * 0.2;
				        vrtcs[index] = uvs[index++] * 740;
				        // vrtcs[index++] = j *165;
				        // uvs[index] = i * 0.2;
				        vrtcs[index] = uvs[index++] * 1012;
				        // vrtcs[index++] = i * 1120/6;
				    }
				}

				
			    function vrtcsp(index, x, y){
			        for(var i in index) {
			            vrtcs[index[i] * 2] = x[i];
			            vrtcs[index[i] * 2 + 1] = y[i];
			        }
			    }

			    //forehead
			    indexes = [0, 1, 2, 3, 4, 5];
			    xs = [tcs[0][0],tcs[19][0],tcs[22][0],tcs[18][0],tcs[15][0],tcs[14][0]];
			    ys = [tcs[0][1] - (tcs[1][1] - tcs[0][1]), tcs[19][1] - (tcs[1][1] - tcs[19][1]), tcs[21][1] - (tcs[1][1] - tcs[21][1]), tcs[17][1] - (tcs[13][1] - tcs[17][1]), tcs[15][1] - (tcs[13][1] - tcs[15][1]),tcs[14][1] - (tcs[13][1] - tcs[14][1])];
			    vrtcsp(indexes, xs, ys);

			    //jaws
			    indexes = [6, 12, 18, 24, 30, 36, 37, 38, 39, 40, 41, 35, 29, 23, 17, 11];
			    xs = [tcs[0][0],tcs[1][0],tcs[2][0],tcs[3][0],tcs[4][0],tcs[5][0],tcs[6][0],tcs[7][0],tcs[7][0],tcs[8][0],tcs[9][0],tcs[10][0],tcs[11][0],tcs[12][0],tcs[13][0],tcs[14][0]];
			    ys = [tcs[0][1],tcs[1][1],tcs[2][1],tcs[3][1],tcs[4][1],tcs[5][1],tcs[6][1],tcs[7][1],tcs[7][1],tcs[8][1],tcs[9][1],tcs[10][1],tcs[11][1],tcs[12][1],tcs[13][1],tcs[14][1]];
			    vrtcsp(indexes, xs, ys);
			    //right eyes
			    indexes = [7, 8, 13, 14];
			    xs = [tcs[23][0],tcs[25][0],tcs[23][0],tcs[25][0]];
			    ys = [tcs[24][1],tcs[24][1],tcs[26][1],tcs[26][1]];
			    vrtcsp(indexes, xs, ys);

			    //left eyes
			    indexes = [9, 10, 15, 16];
			    xs = [tcs[30][0],tcs[28][0],tcs[30][0],tcs[28][0]];
			    ys = [tcs[29][1],tcs[29][1],tcs[31][1],tcs[31][1]];
			    vrtcsp(indexes, xs, ys);

			    //cheek nose
			    indexes = [19, 20, 21, 22];
			    xs = [tcs[5][0],tcs[35][0],tcs[39][0],tcs[9][0]];
			    ys = [tcs[35][1],tcs[35][1],tcs[39][1],tcs[39][1]];
			    vrtcsp(indexes, xs, ys);

			    //mouth
			    indexes = [25, 26, 27, 28, 31, 32, 33, 34];
			    xs = [tcs[44][0],tcs[46][0],tcs[48][0],tcs[50][0],tcs[44][0],tcs[46][0],tcs[48][0],tcs[50][0]];
			    ys = [tcs[46][1],tcs[46][1],tcs[48][1],tcs[48][1],tcs[53][1],tcs[53][1],tcs[53][1],tcs[53][1]];
			    vrtcsp(indexes, xs, ys);

			    this.protoType = new PIXI.mesh.Mesh(
			    	PIXI.Texture.fromImage('assets/imgs/old1.png'),
			    	vrtcs ,
			    	uvs,
			    	new Uint16Array([0,6,1,7,2,8,3,9,4,10,5,11,11,17,11,16,10,15,9,14,8,13,7,12,6,12,12,18,13,19,14,20,15,21,16,22,17,23,23,29,23,28,22,27,21,26,20,25,19,24,18,24,24,30,25,31,26,32,27,33,28,34,29,35,35,41,35,40,34,39,33,38,32,37,31,36,30])
			    );
			    
			    this.protoType.alpha = 1;
			    this.protoType.x = 0;
			    this.protoType.y = 0;
			    app.stage.addChild(this.protoType);
				app.renderer.render(app.stage);
				
				this.face = new PIXI.Application({
				    'width' : 740,
				    'height' : 1012,
				    'transparent' : true
				});
				$('#age-overlay').html(this.face.view);
				var image = PIXI.Texture.fromCanvas($('#image')[0]);
				var original = new PIXI.Sprite(image);
				this.face.stage.addChild(original);

				setTimeout(() => {
					var overlay = PIXI.Texture.fromCanvas(app.view);
					this.overlay1 = new PIXI.Sprite(overlay);
					this.overlay1.pluginName = 'picture';
					this.overlay1.blendMode = PIXI.BLEND_MODES.OVERLAY;
					this.overlay1.alpha = 0.6;
					this.face.stage.addChild(this.overlay1);
					console.log('done');
				}, 2000);
			},
	step2 : function() {

				var app = new PIXI.Application({
				    'width' : 740,
				    'height' : 1012,
				    'transparent' : true
				});
				// $('#age-overlay').html(app.view);

				var filter = new PIXI.filters.ColorMatrixFilter();
				app.stage.filters = [filter];
				filter.desaturate();

				var count = 0;
				var vrtcs = new Float32Array(84);
				var uvs = new Float32Array(84);

				var index = 0;

				uvs = new Float32Array([
					//old2.png
					//row one
				    0.17857142857142858, 0.2357142857142857,
				    0.2357142857142857, 0.15803571428571428,
				    0.42142857142857143, 0.11678571428571428,
				    0.5666666666666667, 0.11678571428571428,
				    0.7107142857142857, 0.13107142857142857,
				    0.8357142857142857, 0.2357142857142857,

				    //row two
				    0.20071428571428572, 0.4446428571428571,
				    0.2785714285714286, 0.4107142857142857,
				    0.4488095238095238, 0.4107142857142857,
				    0.5557142857142857, 0.40375,
				    0.7301428571428571, 0.40375,
				    0.8321428571428572, 0.4473214285714286,

				    //row three
				    0.19357142857142857, 0.5196428571428572,
				    0.28095238095238095, 0.46875,
				    0.4488095238095238, 0.46875,
				    0.5557142857142857, 0.4625,
				    0.7301428571428571, 0.4625,
				    0.8357142857142857, 0.5169642857142858,

				    //row four
				    0.20357142857142857, 0.5946428571428571,
				    0.3261904761904762, 0.5526785714285715,
				    0.4142857142857143, 0.5508928571428572,
				    0.5964285714285714, 0.5455357142857142,
				    0.6952380952380952, 0.5491071428571429,
				    0.8321428571428572, 0.6,

				    //row five
				    0.23214285714285715, 0.6883928571428571,
				    0.375, 0.63598,
				    0.45595238095238094, 0.630546428571428572,
				    0.5547619047619048, 0.630546428571428572,
				    0.6345238095238095, 0.63598,
				    0.8, 0.6883928571428571,

				    //row six
				    0.29285714285714287, 0.7553571428571428,
				    0.375, 0.6905085714285714286,
				    0.45595238095238094, 0.7080357142857143,
				    0.5547619047619048, 0.7080357142857143,
				    0.6345238095238095, 0.6905085714285714286,
				    0.7571428571428571, 0.7446428571428572,

				    //row seven
				    0.3607142857142857, 0.8035714285714286,
				    0.43214285714285716, 0.8303571428571429,
				    0.5178571428571429, 0.8491071428571428,
				    0.5178571428571429, 0.8491071428571428,
				    0.6178571428571429, 0.8330357142857143,
				    0.6928571428571428, 0.7955357142857142
				    ]);
				 

				for (var i = 0; i < 7; i++) {
				    for (var j = 0; j < 6; j++) {
				        // uvs[index] = j * 0.2;
				        vrtcs[index] = uvs[index++] * 740;
				        // vrtcs[index++] = j *165;
				        // uvs[index] = i * 0.2;
				        vrtcs[index] = uvs[index++] * 1012;
				        // vrtcs[index++] = i * 1120/6;
				    }
				}

				
			    function vrtcsp(index, x, y){
			        for(var i in index) {
			            vrtcs[index[i] * 2] = x[i];
			            vrtcs[index[i] * 2 + 1] = y[i];
			        }
			    }

			    //forehead
			    indexes = [0, 1, 2, 3, 4, 5];
			    xs = [tcs[0][0],tcs[19][0],tcs[22][0],tcs[18][0],tcs[15][0],tcs[14][0]];
			    ys = [tcs[0][1] - (tcs[1][1] - tcs[0][1]), tcs[19][1] - (tcs[1][1] - tcs[19][1]), tcs[21][1] - (tcs[1][1] - tcs[21][1]), tcs[17][1] - (tcs[13][1] - tcs[17][1]), tcs[15][1] - (tcs[13][1] - tcs[15][1]),tcs[14][1] - (tcs[13][1] - tcs[14][1])];
			    vrtcsp(indexes, xs, ys);

			    //jaws
			    indexes = [6, 12, 18, 24, 30, 36, 37, 38, 39, 40, 41, 35, 29, 23, 17, 11];
			    xs = [tcs[0][0],tcs[1][0],tcs[2][0],tcs[3][0],tcs[4][0],tcs[5][0],tcs[6][0],tcs[7][0],tcs[7][0],tcs[8][0],tcs[9][0],tcs[10][0],tcs[11][0],tcs[12][0],tcs[13][0],tcs[14][0]];
			    ys = [tcs[0][1],tcs[1][1],tcs[2][1],tcs[3][1],tcs[4][1],tcs[5][1],tcs[6][1],tcs[7][1],tcs[7][1],tcs[8][1],tcs[9][1],tcs[10][1],tcs[11][1],tcs[12][1],tcs[13][1],tcs[14][1]];
			    vrtcsp(indexes, xs, ys);
			    //right eyes
			    indexes = [7, 8, 13, 14];
			    xs = [tcs[23][0],tcs[25][0],tcs[23][0],tcs[25][0]];
			    ys = [tcs[24][1],tcs[24][1],tcs[26][1],tcs[26][1]];
			    vrtcsp(indexes, xs, ys);

			    //left eyes
			    indexes = [9, 10, 15, 16];
			    xs = [tcs[30][0],tcs[28][0],tcs[30][0],tcs[28][0]];
			    ys = [tcs[29][1],tcs[29][1],tcs[31][1],tcs[31][1]];
			    vrtcsp(indexes, xs, ys);

			    //cheek nose
			    indexes = [19, 20, 21, 22];
			    xs = [tcs[5][0],tcs[35][0],tcs[39][0],tcs[9][0]];
			    ys = [tcs[35][1],tcs[35][1],tcs[39][1],tcs[39][1]];
			    vrtcsp(indexes, xs, ys);

			    //mouth
			    indexes = [25, 26, 27, 28, 31, 32, 33, 34];
			    xs = [tcs[44][0],tcs[46][0],tcs[48][0],tcs[50][0],tcs[44][0],tcs[46][0],tcs[48][0],tcs[50][0]];
			    ys = [tcs[46][1],tcs[46][1],tcs[48][1],tcs[48][1],tcs[53][1],tcs[53][1],tcs[53][1],tcs[53][1]];
			    vrtcsp(indexes, xs, ys);

			    this.protoType = new PIXI.mesh.Mesh(
			    	PIXI.Texture.fromImage('assets/imgs/old2.png'),
			    	vrtcs ,
			    	uvs,
			    	new Uint16Array([0,6,1,7,2,8,3,9,4,10,5,11,11,17,11,16,10,15,9,14,8,13,7,12,6,12,12,18,13,19,14,20,15,21,16,22,17,23,23,29,23,28,22,27,21,26,20,25,19,24,18,24,24,30,25,31,26,32,27,33,28,34,29,35,35,41,35,40,34,39,33,38,32,37,31,36,30])
			    );
			    
			    this.protoType.alpha = 1;
			    this.protoType.x = 0;
			    this.protoType.y = 0;
			    app.stage.addChild(this.protoType);
				app.renderer.render(app.stage);
				
				this.face = new PIXI.Application({
				    'width' : 740,
				    'height' : 1012,
				    'transparent' : true
				});
				$('#age-overlay').html(this.face.view);
				var image = PIXI.Texture.fromCanvas($('#image')[0]);
				var original = new PIXI.Sprite(image);
				this.face.stage.addChild(original);

				setTimeout(() => {
					var overlay = PIXI.Texture.fromCanvas(app.view);
					this.overlay2 = new PIXI.Sprite(overlay);
					this.overlay2.pluginName = 'picture';
					this.overlay2.blendMode = PIXI.BLEND_MODES.OVERLAY;
					this.overlay2.alpha = 0.6;
					this.face.stage.addChild(this.overlay2);
					console.log('done');
				}, 2000);
			},
	step3 : function() {

				var app = new PIXI.Application({
				    'width' : 740,
				    'height' : 1012,
				    'transparent' : true
				});
				// $('#age-overlay').html(app.view);

				var filter = new PIXI.filters.ColorMatrixFilter();
				app.stage.filters = [filter];
				filter.desaturate();

				var count = 0;
				var vrtcs = new Float32Array(84);
				var uvs = new Float32Array(84);

				var index = 0;

				uvs = new Float32Array([
					
					//old3.png
					0.17857142857142858, 0.2357142857142857,
				    0.2357142857142857, 0.15803571428571428,
				    0.42142857142857143, 0.11678571428571428,
				    0.5666666666666667, 0.11678571428571428,
				    0.7107142857142857, 0.13107142857142857,
				    0.8357142857142857, 0.2357142857142857,
				    //row one

				    0.20071428571428572, 0.4446428571428571,
				    0.3119047619047619, 0.4089285714285714,
				    0.4452380952380952, 0.4089285714285714,
				    0.5880952380952381, 0.4125,
				    0.7547619047619047, 0.4125,
				    0.8321428571428572, 0.4473214285714286,
				    //row two

				    0.19357142857142857, 0.5196428571428572,
				    0.3119047619047619, 0.45535714285714285,
				    0.4452380952380952, 0.45535714285714285,
				    0.5880952380952381, 0.4660714285714286,
				    0.7547619047619047, 0.4660714285714286,
				    0.8357142857142857, 0.5169642857142858,
				    //row three

				    0.20357142857142857, 0.5946428571428571,
				    0.31666666666666665, 0.5857142857142857,
				    0.4023809523809524, 0.5892857142857143,
				    0.6452380952380953, 0.5875,
				    0.7309523809523809, 0.5857142857142857,
				    0.8321428571428572, 0.6,
				    //row four

				    0.23214285714285715, 0.6883928571428571,
				    0.38095238095238093, 0.6571428571428571,
				    0.4857142857142857, 0.6482142857142857,
				    0.580952380952381, 0.6482142857142857,
				    0.6714285714285714, 0.6571428571428571,
				    0.8, 0.6883928571428571,
				    //row five

				    0.29285714285714287, 0.7553571428571428,
				    0.38095238095238093, 0.7017857142857142,
				    0.4857142857142857, 0.7214285714285714,
				    0.580952380952381, 0.7214285714285714,
				    0.6714285714285714, 0.7017857142857142,
				    0.7571428571428571, 0.7446428571428572,
				    //row six

				    0.3607142857142857, 0.8035714285714286,
				    0.43214285714285716, 0.8303571428571429,
				    0.5178571428571429, 0.8491071428571428,
				    0.5178571428571429, 0.8491071428571428,
				    0.6178571428571429, 0.8330357142857143,
				    0.6928571428571428, 0.7955357142857142
				    //row seven
				    ]);

				for (var i = 0; i < 7; i++) {
				    for (var j = 0; j < 6; j++) {
				        // uvs[index] = j * 0.2;
				        vrtcs[index] = uvs[index++] * 740;
				        // vrtcs[index++] = j *165;
				        // uvs[index] = i * 0.2;
				        vrtcs[index] = uvs[index++] * 1012;
				        // vrtcs[index++] = i * 1120/6;
				    }
				}

				
			    function vrtcsp(index, x, y){
			        for(var i in index) {
			            vrtcs[index[i] * 2] = x[i];
			            vrtcs[index[i] * 2 + 1] = y[i];
			        }
			    }

			    //forehead
			    indexes = [0, 1, 2, 3, 4, 5];
			    xs = [tcs[0][0],tcs[19][0],tcs[22][0],tcs[18][0],tcs[15][0],tcs[14][0]];
			    ys = [tcs[0][1] - (tcs[1][1] - tcs[0][1]), tcs[19][1] - (tcs[1][1] - tcs[19][1]), tcs[21][1] - (tcs[1][1] - tcs[21][1]), tcs[17][1] - (tcs[13][1] - tcs[17][1]), tcs[15][1] - (tcs[13][1] - tcs[15][1]),tcs[14][1] - (tcs[13][1] - tcs[14][1])];
			    vrtcsp(indexes, xs, ys);

			    //jaws
			    indexes = [6, 12, 18, 24, 30, 36, 37, 38, 39, 40, 41, 35, 29, 23, 17, 11];
			    xs = [tcs[0][0],tcs[1][0],tcs[2][0],tcs[3][0],tcs[4][0],tcs[5][0],tcs[6][0],tcs[7][0],tcs[7][0],tcs[8][0],tcs[9][0],tcs[10][0],tcs[11][0],tcs[12][0],tcs[13][0],tcs[14][0]];
			    ys = [tcs[0][1],tcs[1][1],tcs[2][1],tcs[3][1],tcs[4][1],tcs[5][1],tcs[6][1],tcs[7][1],tcs[7][1],tcs[8][1],tcs[9][1],tcs[10][1],tcs[11][1],tcs[12][1],tcs[13][1],tcs[14][1]];
			    vrtcsp(indexes, xs, ys);
			    //right eyes
			    indexes = [7, 8, 13, 14];
			    xs = [tcs[23][0],tcs[25][0],tcs[23][0],tcs[25][0]];
			    ys = [tcs[24][1],tcs[24][1],tcs[26][1],tcs[26][1]];
			    vrtcsp(indexes, xs, ys);

			    //left eyes
			    indexes = [9, 10, 15, 16];
			    xs = [tcs[30][0],tcs[28][0],tcs[30][0],tcs[28][0]];
			    ys = [tcs[29][1],tcs[29][1],tcs[31][1],tcs[31][1]];
			    vrtcsp(indexes, xs, ys);

			    //cheek nose
			    indexes = [19, 20, 21, 22];
			    xs = [tcs[5][0],tcs[35][0],tcs[39][0],tcs[9][0]];
			    ys = [tcs[35][1],tcs[35][1],tcs[39][1],tcs[39][1]];
			    vrtcsp(indexes, xs, ys);

			    //mouth
			    indexes = [25, 26, 27, 28, 31, 32, 33, 34];
			    xs = [tcs[44][0],tcs[46][0],tcs[48][0],tcs[50][0],tcs[44][0],tcs[46][0],tcs[48][0],tcs[50][0]];
			    ys = [tcs[46][1],tcs[46][1],tcs[48][1],tcs[48][1],tcs[53][1],tcs[53][1],tcs[53][1],tcs[53][1]];
			    vrtcsp(indexes, xs, ys);

			    this.protoType = new PIXI.mesh.Mesh(
			    	PIXI.Texture.fromImage('assets/imgs/old3.png'),
			    	vrtcs ,
			    	uvs,
			    	new Uint16Array([0,6,1,7,2,8,3,9,4,10,5,11,11,17,11,16,10,15,9,14,8,13,7,12,6,12,12,18,13,19,14,20,15,21,16,22,17,23,23,29,23,28,22,27,21,26,20,25,19,24,18,24,24,30,25,31,26,32,27,33,28,34,29,35,35,41,35,40,34,39,33,38,32,37,31,36,30])
			    );
			    
			    this.protoType.alpha = 1;
			    this.protoType.x = 0;
			    this.protoType.y = 0;
			    app.stage.addChild(this.protoType);
				app.renderer.render(app.stage);
				
				this.face = new PIXI.Application({
				    'width' : 740,
				    'height' : 1012,
				    'transparent' : true
				});
				$('#age-overlay').html(this.face.view);
				var image = PIXI.Texture.fromCanvas($('#image')[0]);
				var original = new PIXI.Sprite(image);
				this.face.stage.addChild(original);

				setTimeout(() => {
					var overlay = PIXI.Texture.fromCanvas(app.view);
					this.overlay3 = new PIXI.Sprite(overlay);
					this.overlay3.pluginName = 'picture';
					this.overlay3.blendMode = PIXI.BLEND_MODES.OVERLAY;
					this.overlay3.alpha = 0.6;
					this.face.stage.addChild(this.overlay3);
					console.log('done');
				}, 2000);
			},
} 

var uv = {
	launch : function() {

				var app = new PIXI.Application({
				    'width' : 740,
				    'height' : 1012,
				    'transparent' : true
				});
				// $('#uv-overlay').html(app.view);

				var count = 0;
				var vrtcs = new Float32Array(84);
				var uvs = new Float32Array(84);

				var index = 0;

				uvs = new Float32Array([
					    //for uv
					    0.17857142857142858, 0.2357142857142857,
					    0.2357142857142857, 0.15803571428571428,
					    0.42142857142857143, 0.11678571428571428,
					    0.5666666666666667, 0.11678571428571428,
					    0.7107142857142857, 0.13107142857142857,
					    0.8357142857142857, 0.2357142857142857,
					    //row one

					    0.20071428571428572, 0.4446428571428571,
					    0.2785714285714286, 0.4107142857142857,
					    0.4488095238095238, 0.4107142857142857,
					    0.5880952380952381, 0.4125,
					    0.7547619047619047, 0.4125,
					    0.8321428571428572, 0.4473214285714286,
					    //row two

					    0.19357142857142857, 0.5196428571428572,
					    0.28095238095238095, 0.46875,
					    0.4488095238095238, 0.46875,
					    0.5880952380952381, 0.4660714285714286,
					    0.7547619047619047, 0.4660714285714286,
					    0.8357142857142857, 0.5169642857142858,
					    //row three

					    0.20357142857142857, 0.5946428571428571,
					    0.31666666666666665, 0.5857142857142857,
					    0.4023809523809524, 0.5892857142857143,
					    0.6452380952380953, 0.5875,
					    0.7309523809523809, 0.5857142857142857,
					    0.8321428571428572, 0.6,
					    //row four

					    0.23214285714285715, 0.6883928571428571,
					    0.36904761904761907, 0.6803571428571429,
					    0.45714285714285713, 0.6678571428571428,
					    0.5547619047619048, 0.6678571428571428,
					    0.6333333333333333, 0.6803571428571429,
					    0.8, 0.6883928571428571,
					    //row five

					    0.29285714285714287, 0.7553571428571428,
					    0.36904761904761907, 0.7321428571428571,
					    0.45714285714285713, 0.7446428571428572,
					    0.5547619047619048, 0.7446428571428572,
					    0.6333333333333333, 0.7321428571428571,
					    0.7571428571428571, 0.7446428571428572,
					    //row six

					    0.3607142857142857, 0.8035714285714286,
					    0.43214285714285716, 0.8303571428571429,
					    0.5178571428571429, 0.8491071428571428,
					    0.5178571428571429, 0.8491071428571428,
					    0.6178571428571429, 0.8330357142857143,
					    0.6928571428571428, 0.7955357142857142
					    //row seven
				    ]);

				for (var i = 0; i < 7; i++) {
				    for (var j = 0; j < 6; j++) {
				        // uvs[index] = j * 0.2;
				        vrtcs[index] = uvs[index++] * 740;
				        // vrtcs[index++] = j *165;
				        // uvs[index] = i * 0.2;
				        vrtcs[index] = uvs[index++] * 1012;
				        // vrtcs[index++] = i * 1120/6;
				    }
				}

				
			    function vrtcsp(index, x, y){
			        for(var i in index){
			            vrtcs[index[i]*2] = x[i];
			            vrtcs[index[i]*2+1] = y[i];
			        }
			    }

			    //forehead
			    indexes = [0, 1, 2, 3, 4, 5];
			    xs = [tcs[0][0],tcs[19][0],tcs[22][0],tcs[18][0],tcs[15][0],tcs[14][0]];
			    ys = [tcs[0][1] - (tcs[1][1] - tcs[0][1]), tcs[19][1] - (tcs[1][1] - tcs[19][1]), tcs[21][1] - (tcs[1][1] - tcs[21][1]), tcs[17][1] - (tcs[13][1] - tcs[17][1]), tcs[15][1] - (tcs[13][1] - tcs[15][1]),tcs[14][1] - (tcs[13][1] - tcs[14][1])];
			    vrtcsp(indexes, xs, ys);

			    //jaws
			    indexes = [6, 12, 18, 24, 30, 36, 37, 38, 39, 40, 41, 35, 29, 23, 17, 11];
			    xs = [tcs[0][0],tcs[1][0],tcs[2][0],tcs[3][0],tcs[4][0],tcs[5][0],tcs[6][0],tcs[7][0],tcs[7][0],tcs[8][0],tcs[9][0],tcs[10][0],tcs[11][0],tcs[12][0],tcs[13][0],tcs[14][0]];
			    ys = [tcs[0][1],tcs[1][1],tcs[2][1],tcs[3][1],tcs[4][1],tcs[5][1],tcs[6][1],tcs[7][1],tcs[7][1],tcs[8][1],tcs[9][1],tcs[10][1],tcs[11][1],tcs[12][1],tcs[13][1],tcs[14][1]];
			    vrtcsp(indexes, xs, ys);
			    //right eyes
			    indexes = [7, 8, 13, 14];
			    xs = [tcs[23][0],tcs[25][0],tcs[23][0],tcs[25][0]];
			    ys = [tcs[24][1],tcs[24][1],tcs[26][1],tcs[26][1]];
			    vrtcsp(indexes, xs, ys);

			    //left eyes
			    indexes = [9, 10, 15, 16];
			    xs = [tcs[30][0],tcs[28][0],tcs[30][0],tcs[28][0]];
			    ys = [tcs[29][1],tcs[29][1],tcs[31][1],tcs[31][1]];
			    vrtcsp(indexes, xs, ys);

			    //cheek nose
			    indexes = [19, 20, 21, 22];
			    xs = [tcs[5][0],tcs[35][0],tcs[39][0],tcs[9][0]];
			    ys = [tcs[35][1],tcs[35][1],tcs[39][1],tcs[39][1]];
			    vrtcsp(indexes, xs, ys);

			    //mouth
			    indexes = [25, 26, 27, 28, 31, 32, 33, 34];
			    xs = [tcs[44][0],tcs[46][0],tcs[48][0],tcs[50][0],tcs[44][0],tcs[46][0],tcs[48][0],tcs[50][0]];
			    ys = [tcs[46][1],tcs[46][1],tcs[48][1],tcs[48][1],tcs[53][1],tcs[53][1],tcs[53][1],tcs[53][1]];
			    vrtcsp(indexes, xs, ys);

			    this.protoType = new PIXI.mesh.Mesh(
			    	PIXI.Texture.fromImage('assets/imgs/freckles.png'),
			    	vrtcs ,
			    	uvs,
			    	new Uint16Array([0,6,1,7,2,8,3,9,4,10,5,11,11,17,11,16,10,15,9,14,8,13,7,12,6,12,12,18,13,19,14,20,15,21,16,22,17,23,23,29,23,28,22,27,21,26,20,25,19,24,18,24,24,30,25,31,26,32,27,33,28,34,29,35,35,41,35,40,34,39,33,38,32,37,31,36,30]));
			    this.protoType.alpha = 0.9;
			    this.protoType.x = 0;
			    this.protoType.y = 0;
			    app.stage.addChild(this.protoType);
			    app.renderer.render(app.stage);
				

				setTimeout(() => {
					var overlay = PIXI.Texture.fromCanvas(app.view);
					this.overlay = new PIXI.Sprite(overlay);
					this.overlay.pluginName = 'picture';
					this.overlay.blendMode = PIXI.BLEND_MODES.OVERLAY;
					this.overlay.alpha = 1;
					this.overlay.visible = 0;

					ageing.face.stage.addChild(this.overlay);
					console.log('done');
				}, 2000);
				
			},

} 

var smoking = {
	launch : function() {

				var app = new PIXI.Application({
				    'width' : 740,
				    'height' : 1012,
				    'transparent' : true
				});
				// $('#smoking-overlay').html(app.view);

				var filter = new PIXI.filters.ColorMatrixFilter();
				app.stage.filters = [filter];
				filter.desaturate();
				
				var count = 0;
				var vrtcs = new Float32Array(84);
				var uvs = new Float32Array(84);

				var index = 0;

				uvs = new Float32Array([

					//lips
					0.17857142857142858, 0.2357142857142857,
				    0.2357142857142857, 0.15803571428571428,
				    0.42142857142857143, 0.11678571428571428,
				    0.5666666666666667, 0.11678571428571428,
				    0.7107142857142857, 0.13107142857142857,
				    0.8357142857142857, 0.2357142857142857,
				    //row one

				    0.20071428571428572, 0.4446428571428571,
				    0.3119047619047619, 0.4089285714285714,
				    0.4452380952380952, 0.4089285714285714,
				    0.5880952380952381, 0.4125,
				    0.7547619047619047, 0.4125,
				    0.8321428571428572, 0.4473214285714286,
				    //row two

				    0.19357142857142857, 0.5196428571428572,
				    0.3119047619047619, 0.45535714285714285,
				    0.4452380952380952, 0.45535714285714285,
				    0.5880952380952381, 0.4660714285714286,
				    0.7547619047619047, 0.4660714285714286,
				    0.8357142857142857, 0.5169642857142858,
				    //row three

				    0.20357142857142857, 0.5946428571428571,
				    0.31666666666666665, 0.5857142857142857,
				    0.4023809523809524, 0.5892857142857143,
				    0.6452380952380953, 0.5875,
				    0.7309523809523809, 0.5857142857142857,
				    0.8321428571428572, 0.6,
				    //row four

				    0.23214285714285715, 0.6883928571428571,
				    0.38095238095238093, 0.6571428571428571,
				    0.475, 0.6455357142857143,
				    0.5714285714285714, 0.6455357142857143,
				    0.6714285714285714, 0.6571428571428571,
				    0.8, 0.6883928571428571,
				    //row five

				    0.29285714285714287, 0.7553571428571428,
				    0.38095238095238093, 0.7017857142857142,
				    0.475, 0.7044642857142858,
				    0.5714285714285714, 0.7044642857142858,
				    0.6714285714285714, 0.7017857142857142,
				    0.7571428571428571, 0.7446428571428572,
				    //row six

				    0.3607142857142857, 0.8035714285714286,
				    0.43214285714285716, 0.8303571428571429,
				    0.5178571428571429, 0.8491071428571428,
				    0.5178571428571429, 0.8491071428571428,
				    0.6178571428571429, 0.8330357142857143,
				    0.6928571428571428, 0.7955357142857142
				    //row seven
				    ]);

				for (var i = 0; i < 7; i++) {
				    for (var j = 0; j < 6; j++) {
				        // uvs[index] = j * 0.2;
				        vrtcs[index] = uvs[index++] * 740;
				        // vrtcs[index++] = j *165;
				        // uvs[index] = i * 0.2;
				        vrtcs[index] = uvs[index++] * 1012;
				        // vrtcs[index++] = i * 1120/6;
				    }
				}

				
			    function vrtcsp(index, x, y){
			        for(var i in index){
			            vrtcs[index[i]*2] = x[i];
			            vrtcs[index[i]*2+1] = y[i];
			        }
			    }

			    //forehead
			    indexes = [0, 1, 2, 3, 4, 5];
			    xs = [tcs[0][0],tcs[19][0],tcs[22][0],tcs[18][0],tcs[15][0],tcs[14][0]];
			    ys = [tcs[0][1] - (tcs[1][1] - tcs[0][1]), tcs[19][1] - (tcs[1][1] - tcs[19][1]), tcs[21][1] - (tcs[1][1] - tcs[21][1]), tcs[17][1] - (tcs[13][1] - tcs[17][1]), tcs[15][1] - (tcs[13][1] - tcs[15][1]),tcs[14][1] - (tcs[13][1] - tcs[14][1])];
			    vrtcsp(indexes, xs, ys);

			    //jaws
			    indexes = [6, 12, 18, 24, 30, 36, 37, 38, 39, 40, 41, 35, 29, 23, 17, 11];
			    xs = [tcs[0][0],tcs[1][0],tcs[2][0],tcs[3][0],tcs[4][0],tcs[5][0],tcs[6][0],tcs[7][0],tcs[7][0],tcs[8][0],tcs[9][0],tcs[10][0],tcs[11][0],tcs[12][0],tcs[13][0],tcs[14][0]];
			    ys = [tcs[0][1],tcs[1][1],tcs[2][1],tcs[3][1],tcs[4][1],tcs[5][1],tcs[6][1],tcs[7][1],tcs[7][1],tcs[8][1],tcs[9][1],tcs[10][1],tcs[11][1],tcs[12][1],tcs[13][1],tcs[14][1]];
			    vrtcsp(indexes, xs, ys);
			    //right eyes
			    indexes = [7, 8, 13, 14];
			    xs = [tcs[23][0],tcs[25][0],tcs[23][0],tcs[25][0]];
			    ys = [tcs[24][1],tcs[24][1],tcs[26][1],tcs[26][1]];
			    vrtcsp(indexes, xs, ys);

			    //left eyes
			    indexes = [9, 10, 15, 16];
			    xs = [tcs[30][0],tcs[28][0],tcs[30][0],tcs[28][0]];
			    ys = [tcs[29][1],tcs[29][1],tcs[31][1],tcs[31][1]];
			    vrtcsp(indexes, xs, ys);

			    //cheek nose
			    indexes = [19, 20, 21, 22];
			    xs = [tcs[5][0],tcs[35][0],tcs[39][0],tcs[9][0]];
			    ys = [tcs[35][1],tcs[35][1],tcs[39][1],tcs[39][1]];
			    vrtcsp(indexes, xs, ys);

			    //mouth
			    indexes = [25, 26, 27, 28, 31, 32, 33, 34];
			    xs = [tcs[44][0],tcs[46][0],tcs[48][0],tcs[50][0],tcs[44][0],tcs[46][0],tcs[48][0],tcs[50][0]];
			    ys = [tcs[46][1],tcs[46][1],tcs[48][1],tcs[48][1],tcs[53][1],tcs[53][1],tcs[53][1],tcs[53][1]];
			    vrtcsp(indexes, xs, ys);

			    this.protoType = new PIXI.mesh.Mesh(
			    	PIXI.Texture.fromImage('assets/imgs/lips.png'),
			    	vrtcs ,
			    	uvs,
			    	new Uint16Array([0,6,1,7,2,8,3,9,4,10,5,11,11,17,11,16,10,15,9,14,8,13,7,12,6,12,12,18,13,19,14,20,15,21,16,22,17,23,23,29,23,28,22,27,21,26,20,25,19,24,18,24,24,30,25,31,26,32,27,33,28,34,29,35,35,41,35,40,34,39,33,38,32,37,31,36,30]));
			    this.protoType.alpha = 0.4;
			    this.protoType.x = 0;
			    this.protoType.y = 0;
			    app.stage.addChild(this.protoType);
			    app.renderer.render(app.stage);
				
				setTimeout(() => {
					var overlay = PIXI.Texture.fromCanvas(app.view);
					this.overlay = new PIXI.Sprite(overlay);
					this.overlay.pluginName = 'picture';
					this.overlay.blendMode = PIXI.BLEND_MODES.OVERLAY;
					this.overlay.alpha = 1;
					this.overlay.visible = 0;

					ageing.face.stage.addChild(this.overlay);
					console.log('done');
				}, 2000);
				
			},

} 