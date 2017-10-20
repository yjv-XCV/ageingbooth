<!DOCTYPE html>
<html>
	<head>
		<title>Ageing Booth</title>
		<?php $pagePath = 'assets/views/';?>
		<?php include($pagePath . 'styles.php') ?>
		<?php include($pagePath . 'scripts.php') ?>
	</head>
	<body>
		<video id="bgv" class="background" src="assets/videos/background.mp4" autoplay="autoplay" loop="loop"></video>
		<section id="sec02" class="active">
			<?php include($pagePath .'working.php');?>
		</section>
	</body>
</html>