var showpage = function(page){
	number = parseInt(page.attr('id').substr(4));
	switch (number){
		case 2:
			$('#snap').show();
			$('#steps').show();
			$(document).trigger('stepA');
			break;
		case 3:
			$(document).trigger('stepB');
			break;
		case 4:
			$(document).trigger('stepC');
			break;
		case 5:
			$('#steps').hide();
			$(document).trigger('stepA');
			break;
	}
	var config = {
		duration: 400,
		queue: false
	}
	$('img.background.p' + number).fadeIn(config);
	$('img.background.p' + number).siblings().fadeOut(config);
	page.siblings().fadeOut(config);
	page.fadeIn(config);

}

var buttons = function() {

	$('#uv img').hide();
	$('#smoking img').hide();

	$('#slider').slider({
		value: 100,
		slide: function(event, ui){
			// console.log(ui.value * 0.01 * 0.5);
			// alpha value
			if(typeof ageing.overlay != "undefined")ageing.overlay.alpha = (ui.value * 0.01 * 0.5);
			if(typeof uv.overlay != "undefined")uv.overlay.alpha = (ui.value * 0.01 * 0.4);
			if(typeof smoking.overlay != "undefined")smoking.overlay.alpha = (ui.value * 0.01 * 0.4);
		}

	});

	$('#retake').on('click', function(){
		showpage($('#page2'));
	});

	$('#confirm').on('click', function(){
		var box = [81, 115, 550, 588];
		detect_face(box);
		$('#loading').fadeIn(300);
	});

	$('#done').on('click', function(){
		showpage($('#page2'))
	});

	$('#retry').on('click', function(){
		showpage($('#page2'));
	});

	$('#snap').click(function(e){
		//page 2 to page 3
	    e.preventDefault();

	    $('#snap').hide();
	    snap = take_snapshot_from_cam_stream('jpeg');
	    original_half();
	    backup();
	    showpage($('#page3'));

	});

	$('#uv').on('click', function(){
		$(this).toggleClass('active');
		$('#uv-overlay').toggle();
		//add or remove the overlay
	});

	$('#smoking').on('click', function(){
		$(this).toggleClass('active');
		$('#smoking-overlay').toggle();
		//add or remove the overlay
	});
}

var image_paths = [];

var init = function(){

	$.ajax({
          type: 'GET',
          url: './assets/getImagePath.php',
          processData: false,
          contentType: false,
          success: function (data, msg) {
            image_paths = JSON.parse(data);
          },
          error: function(xhr, status, msg) {
            console.log(status);
            console.log(msg);
          }
        });
    showpage($('#page2')); 

}

$(init);
// $(init_cam);
$(buttons);