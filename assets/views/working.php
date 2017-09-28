<div id="steps" >
	<div class="step" id="step1"></div>	
	<div class="step" id="step2"></div>	
	<div class="step" id="step3"></div>	
</div>
<div>
	<div id="page2" class="page">
		<video id="cam-stream"></video>
		<canvas width="740" height="1012" id="face-temp"></canvas>
		<div class="fixed flex-center" id="countdown"></div>
		<div class="mybutton2" id="snap"></div>
		<div class="mybutton3 home"></div>
	</div>


	<div id="page3" class="page">
		<canvas width="740" height="1012" id="snap-canvas"></canvas>
		<canvas width="740" height="1012" id="backup"></canvas>
		<div class="mybutton2"  id="retake"></div>
		<div class="mybutton2"  id="confirm"></div>
		<div class="mybutton3 home"></div>
	</div>
	
	<div id="loading" class="fixed">
		<img src="assets/animation/loading.gif" style="width: 200px;height: 200px;z-index: 3;position: fixed;top: 860px; left: 440px">
	</div>

	<div id="page4" class="page" style="height: 1920px">
		<canvas width="740" height="1012" id="image"></canvas>
		<canvas width="740" height="1012" style="z-index: 2;" id="overlay"></canvas>
		<div id="age-overlay"></div>
		<div width="740" height="1012" style="display: none;z-index: 3;" id="uv-overlay"></div>
		<div width="740" height="1012" style="display: none;z-index: 3;" id="smoking-overlay"></div>
		<canvas width="740" height="1012" id="half-face" style="z-index:4;"></canvas>
		<div id="slider">
			<div id="slider-handle" class="ui-slider-handle"></div>
		</div>
		<div class="toggle" id="smoking">
		</div>
		<div class="toggle" id="uv">
		</div>
		<div class="mybutton3 home"></div>
		<div class="mybutton3" id="retry"></div>
		<div class="mybutton3" id="done"></div>
	</div>

	<div id="page5" class="page">
		<canvas id="last" style="top:412px;"></canvas>
	</div>
</div>
<img class="background" src="assets/imgs/page02.png"></img>


