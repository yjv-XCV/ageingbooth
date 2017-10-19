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
		<video class="background" playsinline autoplay muted loop>
			<?php include($pagePath .'background.php') ?>
		</video>
		<section id="sec01" class="active">
			<?php include($pagePath .'screensaver.php');?>
		</section>
		<section id="sec02">
			<?php include($pagePath .'working.php');?>
		</section>
		<?php include($pagePath .'quit_or_not.php');?>
		<div id="init" class="loading fixed">
			<img src="assets/animation/loading.gif" style="width: 200px;height: 200px;z-index: 10;position: fixed;top: 860px; left: 440px">
		</div>
	</body>
</html>