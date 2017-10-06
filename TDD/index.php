<!DOCTYPE html>
<html>
	<head>
		<title>Ageing Booth</title>
		<?php $pagePath = 'assets/views/';?>
		<?php include($pagePath . 'styles.php') ?>
		<?php include($pagePath . 'scripts.php') ?>
	</head>
	<body>
		<video class="background" playsinline autoplay muted loop>
			<?php include($pagePath .'background.php') ?>
		</video>
		<section id="sec02" class="active">
			<?php include($pagePath .'working.php');?>
		</section>
	</body>
</html>