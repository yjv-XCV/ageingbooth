<!DOCTYPE html>
<html>
	<head>
		<title>Ageing Booth</title>
		<link rel="stylesheet" href="assets/reset.css">
		<link rel="stylesheet" href="vendor/semantic.min.css">
		<link rel="stylesheet" href="assets/style.css">
		<script src="/vendor/jquery-3.1.1.min.js"></script>
		<script src="/vendor/semantic.min.js"></script>
		<script src="/assets/app.js"></script>
		<?php $pagePath = 'assets/views/';?>
	</head>
	<body>
		<section id="sec01">
			<?php include($pagePath .'page01.php');?>
		</section>
		<section id="sec02" class="active">
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
		<?php include($pagePath .'quitOrNot.php');?>
	</body>
</html>