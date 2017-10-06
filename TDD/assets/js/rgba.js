var rgba = function(){
		image = $('#image')[0];
		final_overlay = $('#overlay')[0];
		image_cc = image.getContext('2d');
		final_overlay_cc = final_overlay.getContext('2d');

		// overlay = $('#age-overlay canvas')[0];
		// overlay_cc = overlay.getContext('2d');
		overlay_cc = overlayImage.getContext('2d');

		pixelA = image_cc.getImageData(0, 0, 740, 1012);
		pixelB = overlay_cc.getImageData(0, 0, 740, 1012);
		pixelC = final_overlay_cc.getImageData(0, 0, 740, 1012);
		rgbaA = pixelA.data;
		rgbaB = pixelB.data;

		for (var i = 0; i < rgbaA.length; i += 4) {
			// pixelC.data[i+0] = rgbaA[i+0] + (rgbaB[i+0] - rgbaA[i+0]) * 0.3;
			// pixelC.data[i+1] = rgbaA[i+1] + (rgbaB[i+1] - rgbaA[i+1]) * 0.3;
			// pixelC.data[i+2] = rgbaA[i+2] + (rgbaB[i+2] - rgbaA[i+2]) * 0.3;
			// pixelC.data[i+3] = 255;
			pixelC.data[i+0] = rgbaB[i+0];
			pixelC.data[i+1] = rgbaB[i+1];
			pixelC.data[i+2] = rgbaB[i+2];
			pixelC.data[i+3] = rgbaB[i+3];

		}

		final_overlay_cc = final_overlay_cc.putImageData(pixelC, 0, 0);
}