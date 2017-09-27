var homepage = function(){
	$('#sec01').siblings('section').fadeOut(500);
	$('.myModal').fadeOut(500);
	$('#sec01').animate({
		'opacity': '1',
	},100);
	homeFlag = 1;
	$(stopInactivity);
	// showpage($('#page2'));

	//clear overlay
}

var showpage = function(page){
	number = page.attr('id').substr(4);
	if(number == 2)$('#snap').show();
	path = 'assets/imgs/page0' + number + '.png';
	$('img.background').attr('src', path);
	page.show();
	page.siblings().hide(100);
}

var buttons = function() {

	$('#uv img').hide();
	$('#smoking img').hide();

	$('#sec01').on('click'/*Tap*/,function() {
		$('#sec01').animate({
			'opacity': '0',
		},500);
		showpage($('#page2'));
		$('#sec02').fadeIn(500);	
		homeFlag = 0;
		$(startInactivity);
	});

	$('#slider').slider({
		slide: function(event, ui){
			console.log(ui.value);
			//alpha value
		}

	});

	$('.home').on('click', function(){
		$('.myModal').fadeIn(500);
	});

	$('#yes').on('click', function(){
		$(homepage);
	});

	$('#no').on('click', function(){
		$('.myModal').fadeOut(500);
	});

	$('#retake').on('click', function(){
		showpage($('#page2'));
	});

	$('#confirm').on('click', function(){
		//detect_face(area);
		//detect-face, model, mesh
		//loading
		showpage($('#page4'));
	});

	$('#done').on('click', function(){
		showpage($('#page5'));
		setTimeout(function(){
			$(homepage);
		},5000);
	});

	$('#retry').on('click', function(){
		showpage($('#page2'));
	});



	$('#snap').click(function(e){
		//page 2 to page 3
	    e.preventDefault();

	    $('#snap').hide();
	    // $('#countdown').css('z-index','1').text('5');
	    // setTimeout(function(){$('#countdown').text('4')},1000);
	    // setTimeout(function(){$('#countdown').text('3')},2000);
	    // setTimeout(function(){$('#countdown').text('2')},3000);
	    // setTimeout(function(){$('#countdown').text('1')},4000);
	    setTimeout(function(){
	      $('#countdown').css('z-index','-1').text('');
	      snap = take_snapshot_from_cam_stream('jpeg');
	      original_half();
	      // image_id =  upload_image_data('jpeg', snap);
  	      // video.pause();
	      //show page 3 things
	      //hide page 2 things
	      showpage($('#page3'));
	    }, 0);

	});

	$('#uv').on('click', function(){
		$(this).toggleClass('dot');
		$('#uv-overlay').toggle();
		//add or remove the overlay
	});

	$('#smoking').on('click', function(){
		$(this).toggleClass('dot');
		$('#smoking-overlay').toggle();
		//add or remove the overlay
	});
}

var init = function(){
	var face_template_cc = $('#face-temp')[0].getContext('2d');
	var face_template = new Image();
	$(face_template).load(function() {
	    face_template_cc.drawImage(face_template, 0, 0, 740, 1012);
	    console.log("done");
	});
	face_template.src = 'assets/imgs/face_template.png';
	console.log(face_template.src);


}

$(init);
$(init_cam);
$(flippingPhoto);
$(buttons);
