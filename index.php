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
		<section id="sec01" class="active">
			<?php include($pagePath .'page01.php');?>
		</section>
		<section id="sec02">
			<?php include($pagePath .'page02.php');?>
		</section>
		<section id="sec03">
			<?php include($pagePath .'page03.php');?>
		</section>
		<section id="sec04">
			<?php include($pagePath .'page04.php');?>
		</section>
		<section id="sec05">
			<?php include($pagePath .'page05.php');?>
		</section>
		<?php include($pagePath .'quit_or_not.php');?>

		<section id="develop">
			<?php include($pagePath .'develop.php') ?>
		</section>
	</body>
</html>