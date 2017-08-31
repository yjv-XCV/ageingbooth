var homepage = function(){
	$('#sec01').siblings('section').fadeOut(500);
	$('.myModal').fadeOut(500);
	$('#sec01').animate({
		'opacity': '1',
	},100);
	homeFlag = 1;
	$(stopInactivity);

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

	$('#sec01').on('click'/*Tap*/,function() {
		$('#sec01').animate({
			'opacity': '0',
		},500);
		showpage($('#page2'));
		$('#sec02').fadeIn(500);	
		homeFlag = 0;
		$(startInactivity);
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
		// detect_face(area);
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
	    $('#countdown').css('z-index','1').text('5');
	    setTimeout(function(){$('#countdown').text('4')},1000);
	    setTimeout(function(){$('#countdown').text('3')},2000);
	    setTimeout(function(){$('#countdown').text('2')},3000);
	    setTimeout(function(){$('#countdown').text('1')},4000);
	    // console.log('3');
	    // setTimeout(function(){ console.log('2'); }, 1000);
	    // setTimeout(function(){ console.log('1'); }, 2000);

	    setTimeout(function(){
	      $('#countdown').css('z-index','-1').text('');
	      snap = take_snapshot_from_cam_stream('jpeg');
	      // image_id =  upload_image_data('jpeg', snap);
  	      // video.pause();
	      //show page 3 things
	      //hide page 2 things
	      showpage($('#page3'));
	    }, 5000);

	});

	$('#uv').on('click', function(){
		$(this).toggleClass('active');
	});

	$('#smoking').on('click', function(){
		$(this).toggleClass('active');
	});

	area = [];
	// Developing
	var step = 1;
	overlayName = '#dev-overlay';
	$(overlayName).on('click', function(e){
		// area = [(120/372)*840, (95/422)*1120, 840-(120/372)*840*2, 300];
	    e.preventDefault();
		//face ratio
		//from eye and mouth estimate face size
		switch(step){
			case 1:
				a = zz.cs.getCursorPosition($(overlayName)[0],e);
				area[0] = a[0];
				area[1] = a[1];
				step++;
				break;
			case 2:
				a = zz.cs.getCursorPosition($(overlayName)[0],e);
				area[2] = a[0]-area[0];
				area[3] = a[1]-area[1];
				step++;
				break;
			case 3:
				area[0] = area[0] - area[2]/6;
				area[1] = area[1] - area[3];
				area[2] = area[2]/3*4;
				area[3] = area[3]*2.5;
				detect_face(area);
				step=1;
				break;
		}
	});
}

$(init_cam);
$(flippingPhoto);
$(buttons);
