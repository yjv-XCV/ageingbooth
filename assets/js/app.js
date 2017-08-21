var homepage = function(){
		$('#sec01').siblings('section').fadeOut(500);
		$('.myModal').fadeOut(500);
		$('#sec01').animate({
			'opacity': '1',
		},100);
		homeFlag = 1;
		$(stopInactivity);
	}



var buttons = function() {

	$('#sec01').on('click'/*Tap*/,function() {
		$('#sec01').animate({
			'opacity': '0',
		},500);
		$('#sec02').fadeIn(500);	
		$('#snap').show();
		homeFlag = 0;
		$(startInactivity);
	});

	$('.home').on('click', function(){
		$('.myModal').fadeTo(500,0.7);
	});

	$('#quit').on('click', function(){
		$(homepage);
	});

	$('#cancel').on('click', function(){
		$('.myModal').fadeOut(500);
	});

	$('.myModal').on('click', function(){
		$('.myModal').fadeOut(500);
	});

	$('#retake').on('click', function(){
		$('#snap').show();
		$('#sec03').hide();
		$('#sec02').show();
	});

	$('#confirm').on('click', function(){
		$('#sec03').hide();
		$('#sec04').show();
	});

	$('#snap').click(function(e){

	    e.preventDefault();

	    $('#snap').hide();
	    $('#countdown').css('z-index','1').text('5');
	    setTimeout(function(){$('#countdown').text('4')},1000);
	    setTimeout(function(){$('#countdown').text('3')},1000);
	    setTimeout(function(){$('#countdown').text('2')},3000);
	    setTimeout(function(){$('#countdown').text('1')},4000);
	    // console.log('3');
	    // setTimeout(function(){ console.log('2'); }, 1000);
	    // setTimeout(function(){ console.log('1'); }, 2000);

	    setTimeout(function(){
	      $('#countdown').css('z-index','-1').text('');
	      snap = take_snapshot_from_cam_stream('jpeg');
	      // image_id =  upload_image_data('jpeg', snap);
		  $('#sec02').hide();
		  $('#sec03').show();
	      // video.pause();
	    }, 5000);


	  });
};

$(init_cam);
$(buttons);
// $(homepage);