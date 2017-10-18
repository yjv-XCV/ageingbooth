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
	</body>
</html>