<!DOCTYPE html>
<html>
	<head>
		<title>Ageing Booth</title>
		<link rel="stylesheet" href="vendor/reset.css">
		<link rel="stylesheet" href="vendor/semantic.min.css">
		<link rel="stylesheet" href="assets/css/style.css">
		<script src="/vendor/jquery-3.1.1.min.js"></script>
		<script src="/vendor/semantic.min.js"></script>
		<script src="/vendor/libs/pixi.js"></script>
	    <script src='/vendor/libs/model_pca_20_svm.js'></script>
	    <script src='/assets/js/model_pca_20_svm.js'></script>
		<script src='/assets/js/screensaver.js'></script>
		<script src='/assets/js/app.js'></script>
		<?php $pagePath = 'assets/views/';?>
	</head>
	<body>
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
		<?php include($pagePath .'quitOrNot.php');?>
	</body>
</html>