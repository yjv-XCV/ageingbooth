<!DOCTYPE html>
<html>
	<head>
		<title>Ageing Booth</title>
		<!-- <meta name='viewport' content='user-scalable=0'/> -->
		<?php $pagePath = 'assets/views/';?>
		<?php include($pagePath . 'styles.php') ?>
		<?php include($pagePath . 'scripts.php') ?>
	</head>
	<body>
		<video id="bgv" class="background" src="assets/videos/background.mp4" autoplay="autoplay" loop="loop"></video>
		<section id="sec01" class="active">
			<?php include($pagePath .'screensaver.php');?>
		</section>
		<section id="sec02">
			<?php include($pagePath .'working.php');?>
		</section>
		<?php include($pagePath .'quit_or_not.php');?>
		<div id="init" style="z-index: 10;" class="loading fixed">
			<img src="assets/animation/loading.gif" style="width: 200px;height: 200px;z-index: 10;position: fixed;top: 860px; left: 440px">
		</div>
	</body>
</html>